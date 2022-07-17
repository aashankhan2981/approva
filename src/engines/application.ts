import { ApplicationType, AttribuetsType, CheckerFunction, CheckerInputType, ChekingType, CITIZEN_STATUS, FilterType, FIRST_TIME_BUYING, OutPutType, VariantOutput, BankSize, ResponsivityLevel, DocumentationRequirementLevel, PrepaymentAbilityLevel } from "./programs/types";
import rates from "./rates/rates.json";
import { IntrestRate, MinIntrestType } from "./types";
import annualTaxesRations from './taxes/taxes.json'
import { checkers, getLenderById } from "./constants";
import { getApprovalCashBack } from "../helpers";

export function getAnnualTaxRate(address: string) {
    const default_taxrate = 1 //1 means 1% of the purchase Price
    if (!address) return default_taxrate
    for (let city in Object.keys(annualTaxesRations)) {
        if (address.includes(city))
            return annualTaxesRations[city]
    }
    // if the city is not included return default_taxrate as estimation
    return default_taxrate
}

export function getAnnualTax(address: string, purchasePrice: number) {
    const annualTax = Math.round(getAnnualTaxRate(address) * purchasePrice) / 100
    return annualTax
}

export function getTotalIncome(application) {
    let totalIncome = application.applicants.reduce(function (total, applicant) {
        const currentApplicantTotalIncome = applicant.incomes.reduce(function (accumulator, income) {
            let annualAmount = income.incomeAmount;
            if (income.incomeRate == "monthly") {
                annualAmount = income.incomeAmount * 12;
            }
            else {
                if (income.incomeRate == "weekly") {
                    annualAmount = income.incomeAmount * 52;
                }
            }
            return accumulator + annualAmount;
        }, 0);
        return total + currentApplicantTotalIncome;
    }, 0);

    totalIncome = totalIncome / 12;
    if (application.expected_income) {
        totalIncome += application.expected_income;
    }
    return totalIncome;
}

export function getTotaldepts(application) {
    let totalDepts = application.applicants.reduce(function (total, applicant) {
        const currentApplicantTotalDept = applicant.debts.reduce(function (accumulator, dept) {
            let annualAmount = dept.debtAmount;
            if (dept.debtRate == "monthly") {
                annualAmount = dept.debtAmount * 12;
            }
            else {
                if (dept.debtRate == "weekly") {
                    annualAmount = dept.debtAmount * 52;
                }
            }
            return accumulator + annualAmount;
        }, 0);
        return total + currentApplicantTotalDept;
    }, 0);
    return totalDepts / 12;
}

function getCMHC(LTV) {
    const CMHC = [
        [65, 0.6],
        [75, 1.7],
        [80, 2.4],
        [85, 2.8],
        [90, 3.1],
        [95, 4.0],
    ];

    for (let cmhc of CMHC) {
        if (LTV <= cmhc[0]) {
            return cmhc[1];
        }
    }
}

export function getDefaultEnsurence(mortgage, amortization, LTV) {
    const n = amortization * 12;
    const cmhc = getCMHC(LTV);

    return (mortgage * cmhc) / (100 * n);
}

function getMonthlyPayment(mortgage, amortization, LTV, QRate = 5.25) {
    const season = 12;

    const n = amortization * 12;
    const r = (QRate / 100) / season;//monthly rate
    let defaultEnsurence = getDefaultEnsurence(mortgage, amortization, LTV);
    if (LTV <= 80) {
        defaultEnsurence = 0;
    }

    const coef = Math.pow(1 + r, n);
    const monthlyPay = (mortgage * r * coef) / (coef - 1) + defaultEnsurence;
    return monthlyPay;
}

function getHouseExpenses(application) {
    let expenses = 0;

    if (application.annualTax) {
        expenses = application.annualTax / 12;
    } else {
        if (application.estimativeAnnualTax) {
            expenses = application.estimativeAnnualTax / 12;
        }
    }

    if (application.house_fees) {
        expenses += application.house_fees;
    }

    if (application.house_heats) {
        expenses += application.house_heats;
    }
    else {
        expenses += 100;// by default heats expected to be at least 100
    }

    return expenses;
}

function getOtherExpenses(application) {
    let otherExpenses = 0;
    const totalRanting = application.applicants.reduce(function (accumulator, applicant) {
        let currentApplicantRenting = 0
        if (applicant.livinStatus && applicant.livinStatus == "renting") {
            if (applicant.rentingMonthly) {
                currentApplicantRenting = applicant.rentingMonthly;
            }
        }
        return accumulator + currentApplicantRenting;
    }, 0);

    otherExpenses += totalRanting;

    return otherExpenses;
}

export function getLTV(application) {
    return Math.round(((application.purchacePrice - application.downPayment) / application.purchacePrice) * 100);
}

export function getFICO(application) {
    if (application.applicants.length == 1) {
        return application.applicants[0].FICO;
    }

    const maxFICO = application.applicants.reduce(function (applicant1, applicant2) {
        return Math.max(applicant1.FICO, applicant2.FICO,);
    });
    return maxFICO;
}

export function isMajorUrban(address) {
    return false
}

export function getRPM_GDS(application, filtres, p = 1) {
    const mortgage = application.purchacePrice - application.downPayment;
    const ltv = getLTV(application);

    let qualificattionAmortazation = filtres.amortization;
    if (ltv >= 80) {
        qualificattionAmortazation = 25;
    }

    const monthlyPayment = getMonthlyPayment(mortgage, qualificattionAmortazation, ltv, filtres.QRate);

    const houseExpenses = getHouseExpenses(application);

    const totalIncome = getTotalIncome(application) - application.expected_income * (1 - p)

    const gds = ((monthlyPayment + houseExpenses) / totalIncome) * 100

    return Math.floor(gds);
}

export function getRPM_TDS(application, filtres, p = 1) {
    const gds = getGDS(application, filtres);
    const totalDepts = getTotaldepts(application);
    const otherExpenses = getOtherExpenses(application);
    const totalIncome = getTotalIncome(application) - application.expected_income * (1 - p)

    const tds = gds + ((totalDepts + otherExpenses) / totalIncome) * 100;
    return Math.floor(tds);
}

function getGDS(application, filtres) {
    const mortgage = application.purchacePrice - application.downPayment;

    const ltv = getLTV(application);

    let qualificattionAmortazation = filtres.amortization;
    if (ltv >= 80) {
        qualificattionAmortazation = qualificattionAmortazation > 25 ? 25 : qualificattionAmortazation;
    }

    const monthlyPayment = getMonthlyPayment(mortgage, qualificattionAmortazation, ltv, filtres.QRate);

    const houseExpenses = getHouseExpenses(application);

    const totalIncome = getTotalIncome(application);

    const gds = ((monthlyPayment + houseExpenses) / totalIncome) * 100

    return Math.floor(gds);
}

function getTDS(application, filtres) {
    const gds = getGDS(application, filtres);
    const totalDepts = getTotaldepts(application);
    const otherExpenses = getOtherExpenses(application);
    const totalIncome = getTotalIncome(application);

    const tds = gds + ((totalDepts + otherExpenses) / totalIncome) * 100;

    return Math.floor(tds);
}

function getBunkrupcy(application) {
    const bunc = {
        "no": 7,
        "yes": 6
    }
    if (application.applicants.length === 1) {
        return bunc[application.applicants[0].bunkrupcy]
    }

    const maxBunkrupcy = application.applicants.reduce(function (applicant1, applicant2) {
        return Math.max(bunc[applicant1.bunkrupcy], bunc[applicant2.bunkrupcy],);
    });
    return maxBunkrupcy;
}

export function transformApplication(application: ApplicationType, filtres: FilterType, bankName: string) {
    const intrestRates = getMinInstrestRate(application, filtres, bankName);


    let input: CheckerInputType = {
        applicant_type: application.applicants[0].incomes[0].incomeType,
        applicantsNumber: application.applicants.length,
        isCanadian: application.applicants[0].sitizenStatus === CITIZEN_STATUS.canadien,
        purpose: application.lookingFor,
        usage: application.purpose,
        price: application.purchacePrice,
        isFistTimeBuyer: application.firestTime === FIRST_TIME_BUYING.first_time,
        LTV: getLTV(application),
        mortgage: application.purchacePrice - application.downPayment,
        address: application.homeAdress.value.description,
        FICO: getFICO(application),
        GDS: getGDS(application, filtres),
        TDS: getTDS(application, filtres),
        bunkrupcy: getBunkrupcy(application),
        population: 0,
        squarfeet: 0,
        propretyType: application.propretyType,
        condoFloor: null,
        unitsNumber: null,
        targetTenant: null,
        rentalDuration: null,
        applicantTotalProperties: null,
        amortization: filtres.amortization,
        rate: filtres.rate,
        term: filtres.term,
        ensured: filtres.ensured,
        fixedRateMonthlyPayment: null,
        variableRateMonthlyPayment: null,
        rankingPayment: null
    }

    let fixedPay = Infinity;
    let varPay = Infinity;
    if (intrestRates != null) {
        if (typeof (intrestRates.fixed) != 'undefined') {
            input.fixedRateMonthlyPayment = {
                amortization: input.amortization,
                term: intrestRates.fixed.term,
                intrestRate: intrestRates.fixed.value,
                ensured: intrestRates.fixed.ensured,
                value: getMonthlyPayment(input.mortgage, filtres.amortization, input.LTV, intrestRates.fixed.value)
            };
            fixedPay = input.fixedRateMonthlyPayment.value;
        }
        if (typeof (intrestRates.variable) != 'undefined') {
            input.variableRateMonthlyPayment = {
                amortization: input.amortization,
                term: intrestRates.variable.term,
                intrestRate: intrestRates.variable.value,
                ensured: intrestRates.variable.ensured,
                value: getMonthlyPayment(input.mortgage, filtres.amortization, input.LTV, intrestRates.variable.value)
            };
            varPay = input.variableRateMonthlyPayment.value;
        }
    }

    input.rankingPayment = Math.min(fixedPay, varPay);



    return input;
}


export function getMinInstrestRate(application: ApplicationType, filter: FilterType, bankName: string): MinIntrestType {

    const banksRates = rates.filter(rate => {
        if (rate.name === bankName) return true
        else return false;
    });

    if (banksRates.length === 0) {

        return null;
    }
    const bankRates = banksRates[0];

    const ltv = getLTV(application);

    const validRates = bankRates.rates.filter(item => {
        if (filter.rate) {
            if (filter.rate === "fixed" && item.prime_offset) return false;
            if (filter.rate !== "fixed" && item.fixed) return false;
        }

        if (typeof (filter.ensured) != "undefined" && item.ensured !== filter.ensured) return false;

        if (typeof (filter.refinance) != "undefined" && item.refinance !== filter.refinance) return false;

        if (filter.term && item.term !== filter.term) return false;

        if (ltv < item.LTV_L || ltv > item.LTV_U) return false;

        return true;
    });

    const fixedRates = validRates.filter(item => {
        return typeof (item.fixed) != 'undefined'
    });

    const variableRates = validRates.filter(item => {
        return typeof (item.prime_offset) != 'undefined'
    });

    let fixedIntrestRates = fixedRates.map((item): IntrestRate => {
        return {
            term: item.term,
            value: item.fixed,
            ensured: item.ensured,
        };
    });

    let variableIntrestRates = variableRates.map(item => {
        return {
            term: item.term,
            value: item.prime_offset + bankRates.prime,
            ensured: item.ensured,
        };
    });

    fixedIntrestRates.sort(function (rate1, rate2) {
        return rate1.value - rate2.value;
    });

    variableIntrestRates.sort(function (rate1, rate2) {
        return rate1.value - rate2.value;
    });

    if (fixedIntrestRates.length > 0 && variableIntrestRates.length > 0) {
        return {
            fixed: fixedIntrestRates[0],
            variable: variableIntrestRates[0],
        }
    }
    if (fixedIntrestRates.length > 0) {
        return {
            fixed: fixedIntrestRates[0],
        }
    }
    if (variableIntrestRates.length > 0) {
        return {
            variable: variableIntrestRates[0],
        }
    }
    return null;
}
/************************************** */

export interface Ivariant {
    lender: string;
    program: string;
    name: string;
    variant_checker(application: ApplicationType, filter: FilterType): boolean;
    get_max_amorthization(application: ApplicationType, filter: FilterType): number;
    get_max_purchasePrice(application: ApplicationType, filter: FilterType): number;
    getQualifyingRate(): number;
    postProcessing(input: CheckerInputType, application: ApplicationType, filter: FilterType): void;
    engin(application: ApplicationType, filter: FilterType): VariantOutput | null;
    checkers: CheckerFunction[];
}

export class Variant implements Ivariant {
    lender: string
    program: string
    name: string
    variant_checker(application: ApplicationType, filter: FilterType): boolean {
        return true;
    }
    get_max_amorthization(application: ApplicationType, filter: FilterType): number {
        return 25;
    }
    get_max_purchasePrice(application: ApplicationType, filter: FilterType): number {
        const maxGDS = 0.5
        const maxTDS = 0.55
        const heats = 150
        const taxRate = getAnnualTaxRate(application.homeAdress.label) / 100 / 12;
        const income = getTotalIncome(application);
        const downP = application.downPayment
        const season = 12;
        const QRate = this.getQualifyingRate()
        const amortization = this.get_max_amorthization(application, filter)
        const n = amortization * 12;
        const r = (QRate / 100) / season;
        const coef = Math.pow(1 + r, n);
        const debts = getTotaldepts(application)

        for (let ltv = 95; ltv > 0; ltv -= 1) {

            let price = Math.floor(downP / (1 - ltv / 100) * 100) / 100
            if (price >= 1000000 && ltv > 80) continue
            // now if price > 1M , ltv must be >= 20
            const mortgage = downP * (ltv / 100) / (1 - ltv / 100)
            const insurance = ltv <= 80 ? 0 : getDefaultEnsurence(mortgage, amortization, ltv)
            const GDSContraint = (downP * r * coef + (maxGDS * income - heats - insurance) * (coef - 1)) / (r * coef + taxRate * (coef - 1))
            const TDSContraint = (downP * r * coef + (maxTDS * income - heats - insurance - debts) * (coef - 1)) / (r * coef + taxRate * (coef - 1))
            if (price <= GDSContraint && price <= TDSContraint) {
                //console.log("downP=" + downP + "| price=" + price + "| ltv=" + ltv + "| gds_contraint= " + GDSContraint + "| tds_contraint= " + TDSContraint);
                return price

            }
        }
        return 0
    }
    getQualifyingRate(): number {
        return 5.25
    }

    getPrepaymentAbility(): number {
        let value = 0;
        switch (getLenderById(this.lender).prepaymentAbility) {
            case PrepaymentAbilityLevel.High:
                value = 0.66;
                break;
            case PrepaymentAbilityLevel.Medium:
                value = 0.5;
                break;
            default:
                value = 0.33;
        }

        return value;
    }
    getBankSize(): number {
        let value = 0;
        switch (getLenderById(this.lender).bankSize) {
            case BankSize.Big:
                value = 0.66;
                break;
            case BankSize.Medium:
                value = 0.5;
                break;
            default:
                value = 0.33;
        }

        return value;
    }
    getPaymentFlexibilityFirstMonth(): number {
        return getLenderById(this.lender).paymentFlexibilityFirstMonth ? 1 : 0;
    }
    getPaymentFlexibilityMissOne(): number {
        return getLenderById(this.lender).paymentFlexibilityMissOne ? 1 : 0;
    }
    getOnlineBanking(): number {
        return getLenderById(this.lender).onLineBanking ? 1 : 0;
    }
    getHELOC(): number {
        return getLenderById(this.lender).Heloc ? 1 : 0;
    }
    getCreditCard(): number {
        return getLenderById(this.lender).creditCard ? 1 : 0;
    }
    getBundlePricing(): number {
        return getLenderById(this.lender).bundlePricing ? 1 : 0;
    }
    getOverdraftProtection(): number {
        return getLenderById(this.lender).overdraftProtection ? 1 : 0;
    }
    getMultipleBranch(): number {
        return getLenderById(this.lender).multipleBranch ? 1 : 0;
    }
    getResponsivity(): number {
        let value = 0;
        switch (getLenderById(this.lender).responsivity) {
            case ResponsivityLevel.Long:
                value = 0.33;
                break;
            case ResponsivityLevel.Medium:
                value = 0.5;
                break;
            default:
                value = 0.33;
        }

        return value;
    }
    hasCashBack(): number {
        return getLenderById(this.lender).hasCashBack ? 1 : 0;
    }
    getDocumentationRequirement(): number {
        let value = 0;
        switch (getLenderById(this.lender).documentationRequired) {
            case DocumentationRequirementLevel.High:
                value = 0.66;
                break;
            case DocumentationRequirementLevel.Medium:
                value = 0.5;
                break;
            default:
                value = 0.33;
        }

        return value;
    }


    postProcessing(input: CheckerInputType, application: ApplicationType, filter: FilterType): void {
        // this can be overrided by sub classes to add additional processing
    }

    engin(application: ApplicationType, filter: FilterType): VariantOutput {
        const lender = getLenderById(this.lender);
        let input: CheckerInputType = transformApplication(
            application,
            Object.assign({
                amortization: this.get_max_amorthization(application, filter),
                QRate: this.getQualifyingRate()
            }, filter)
            , lender.name
        );
        this.postProcessing(input, application, filter);
        const checkResults = this.checkers.map((checker, index): ChekingType => {
            return {
                checkerValue: checker(input),
                inputValue: input[checkers[index]],
            };
        });
        const rankAttributes: AttribuetsType = {
            monthlyPayment: input.rankingPayment,
            cashback: getApprovalCashBack(lender.approva_benif_portion, input.mortgage),
            prePaymentAbility: this.getPrepaymentAbility(),
            bankSize: this.getBankSize(),
            paymentFlexibilityFirstMonth: this.getPaymentFlexibilityFirstMonth(),
            paymentFlexibilityMissOne: this.getPaymentFlexibilityMissOne(),
            onlineBanking: this.getOnlineBanking(),
            HELOC: this.getHELOC(),
            creditCard: this.getCreditCard(),
            bundlePricing: this.getBundlePricing(),
            overdraftProtection: this.getOverdraftProtection(),
            multipleBranch: this.getMultipleBranch(),
            responsivity: this.getResponsivity(),
            hasCashBack: this.hasCashBack(),
            documentationRequirement: this.getDocumentationRequirement(),

        };
        const outputData: OutPutType = {
            fixedRateMonthlyPayment: input.fixedRateMonthlyPayment,
            variableRateMonthlyPayment: input.variableRateMonthlyPayment,
            approvaCashBack: getApprovalCashBack(lender.approva_benif_portion, input.mortgage),
            bankCashBack: 0,
            fico: typeof (input.FICO) === 'number' ? input.FICO : Math.max(...input.FICO),
            gds: input.GDS,
            tds: input.TDS,
        }
        return {
            results: checkResults,
            attributes: rankAttributes,
            output: outputData,
        };
    }
    checkers: CheckerFunction[]

}