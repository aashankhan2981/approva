import { ApplicantType } from './programs/types'
import rates from './rates/rates.json'
import annualTaxesRations from './taxes/taxes.json'
// this file can be executed isolated with node to test functions , its in typescript but still be possible to be executed 
// by installing ts-node (npm install -g ts-node) and than run "ts-node calculation.ts"
//export
export function getAnnualTaxRate(address: string) {
    const default_taxrate = 0 //1 means 1% of the purchase Price
    if (!address) return default_taxrate
    
    for (let city of Object.keys(annualTaxesRations)) {
        if (address.includes(city))
            return annualTaxesRations[city] || default_taxrate
    }
    // if the city is not included return default_taxrate as estimation
    return default_taxrate
}

export function getAnnualTax(address: string, purchasePrice: number) {
    const annualTax = Math.round(getAnnualTaxRate(address) * purchasePrice) / 100
    return annualTax
}

function getTotalIncome(application) {
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

function getTotaldepts(application) {
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
        if (LTV < cmhc[0]) {
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

//export 
function getLTV(application) {
    return Math.round(((application.purchacePrice - application.downPayment) / application.purchacePrice) * 100);
}

//export 
function getFICO(application) {
    if (application.applicants.length == 1) {
        return application.applicants[0].FICO;
    }

    const maxFICO = application.applicants.reduce(function (applicant1, applicant2) {
        return Math.max(applicant1.FICO, applicant2.FICO,);
    });
    return maxFICO;
}

//export 
function isMajorUrban(address) {
    return false
}

//export 
function getRPM_GDS(application, filtres, p = 1) {
    const mortgage = application.purchacePrice - application.downPayment;
    const ltv = getLTV(application);

    const monthlyPayment = getMonthlyPayment(mortgage, filtres.amortization, ltv, filtres.QRate);

    const houseExpenses = getHouseExpenses(application);

    const totalIncome = getTotalIncome(application) - application.expected_income * (1 - p)

    const gds = ((monthlyPayment + houseExpenses) / totalIncome) * 100

    return Math.floor(gds);
}

//export 
function getRPM_TDS(application, filtres, p = 1) {
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
    const monthlyPayment = getMonthlyPayment(mortgage, filtres.amortization, ltv, filtres.QRate);
    const houseExpenses = getHouseExpenses(application);
    const totalIncome = getTotalIncome(application);
    const gds = ((monthlyPayment + houseExpenses) / totalIncome) * 100
    //return Math.floor(gds);
    return gds;
}

function getTDS(application, filtres) {
    const gds = getGDS(application, filtres);

    const totalDepts = getTotaldepts(application);

    const otherExpenses = getOtherExpenses(application);

    const totalIncome = getTotalIncome(application);

    const tds = gds + ((totalDepts + otherExpenses) / totalIncome) * 100;
    //return Math.floor(tds);
    return tds;
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

//export 
function getMinInstrestRate(application, filter, bankName) {

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

    let fixedIntrestRates = fixedRates.map(item => {
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

const application = {
    "applicants": [
        {
            "type": "main",
            "fullName": "hemza talha",
            "email": "hemzatalha@gmail.com",
            "phone": "0799085706",
            "province": "bc",
            "user": "nUPgo3nDonOP8vCMIlXlLdlXG753",
            "sitizenStatus": "canadien",
            "moritalStatus": "single",
            "currrentAdress": {
                "label": "Apple Upper Canada Mall, Yonge Street, Newmarket, ON, Canada",
                "value": {
                    "description": "Apple Upper Canada Mall, Yonge Street, Newmarket, ON, Canada",
                    "matched_substrings": [
                        {
                            "length": 23,
                            "offset": 0
                        }
                    ],
                    "place_id": "ChIJ61hKm-XRKogR28hp86md7sc",
                    "reference": "ChIJ61hKm-XRKogR28hp86md7sc",
                    "structured_formatting": {
                        "main_text": "Apple Upper Canada Mall",
                        "main_text_matched_substrings": [
                            {
                                "length": 23,
                                "offset": 0
                            }
                        ],
                        "secondary_text": "Yonge Street, Newmarket, ON, Canada"
                    },
                    "terms": [
                        {
                            "offset": 0,
                            "value": "Apple Upper Canada Mall"
                        },
                        {
                            "offset": 25,
                            "value": "Yonge Street"
                        },
                        {
                            "offset": 39,
                            "value": "Newmarket"
                        },
                        {
                            "offset": 50,
                            "value": "ON"
                        },
                        {
                            "offset": 54,
                            "value": "Canada"
                        }
                    ],
                    "types": [
                        "electronics_store",
                        "point_of_interest",
                        "store",
                        "establishment"
                    ]
                }
            },
            "livinStatus": "renting",
            "rentingMonthly": 900,
            "incomes": [
                {
                    "jobeTitle": "teacher",
                    "startingDate": "2013-04-30T23:00:00.000Z",
                    "incomeType": "self_employed",
                    "incomeAmount": 6700,
                    "incomeRate": "monthly"
                }
            ],
            "FICO": 680,
            "bunkrupcy": "no",
            "dischardedDate": null,
            "debts": [
                {
                    "debtType": "school_loan",
                    "debtAmount": 500,
                    "debtRate": "monthly"
                }
            ]
        }
    ],
    "user": "nUPgo3nDonOP8vCMIlXlLdlXG753",
    "lookingFor": "purchase",
    "propretyType": "condo",
    "house_fees": 0,
    "purpose": "living_and_rent",
    "expected_income": 0,
    "firestTime": "first_time",
    "homeAdress": {
        "label": "Ghadir Meat & Restaurant, Lawrence Avenue East, Scarborough, ON, Canada",
        "value": {
            "description": "Ghadir Meat & Restaurant, Lawrence Avenue East, Scarborough, ON, Canada",
            "matched_substrings": [
                {
                    "length": 2,
                    "offset": 0
                }
            ],
            "place_id": "ChIJCSMMFSjN1IkROpqGIr8NXu4",
            "reference": "ChIJCSMMFSjN1IkROpqGIr8NXu4",
            "structured_formatting": {
                "main_text": "Ghadir Meat & Restaurant",
                "main_text_matched_substrings": [
                    {
                        "length": 2,
                        "offset": 0
                    }
                ],
                "secondary_text": "Lawrence Avenue East, Scarborough, ON, Canada"
            },
            "terms": [
                {
                    "offset": 0,
                    "value": "Ghadir Meat & Restaurant"
                },
                {
                    "offset": 26,
                    "value": "Lawrence Avenue East"
                },
                {
                    "offset": 48,
                    "value": "Scarborough"
                },
                {
                    "offset": 61,
                    "value": "ON"
                },
                {
                    "offset": 65,
                    "value": "Canada"
                }
            ],
            "types": [
                "bakery",
                "restaurant",
                "food",
                "point_of_interest",
                "store",
                "establishment"
            ]
        }
    },
    "annualTax": 2700,
    "estimativeAnnualTax": 2000,
    "purchacePrice": 475000,
    "downPayment": 45000,
    "checked": true,
    "note": "koko",
    "tags": [
        "short_disability",
        "able_tax_returns"
    ],
    "createdate": "2022-02-06T20:51:17.693Z"
}

const filters = {
    amortization: 25,
    QRate: 5.25,
}

//const tds = getTDS(application, filters);



function LandTransferTaxeCalculator(price, address, isFisrtTimeHomeBuyer) {
    let PrivinceTaxe = 0;
    let provinceRefund = 0;
    if (address.includes("ON")) {
        if (price > 55000) {
            PrivinceTaxe += 275;
            if (price > 250000) {
                PrivinceTaxe += 1950;
                if (price > 400000) {
                    PrivinceTaxe += 2250;
                    if (price > 2000000) {
                        PrivinceTaxe += 32000;
                        PrivinceTaxe += (price - 2000000) * 0.025;
                    }
                    else {
                        PrivinceTaxe += (price - 400000) * 0.02;
                    }
                }
                else {
                    PrivinceTaxe += (price - 250000) * 0.015;
                }
            }
            else {
                PrivinceTaxe += (price - 55000) * 0.01;
            }
        }
        else {
            PrivinceTaxe += price * 0.005;
        }

        if (isFisrtTimeHomeBuyer) {
            provinceRefund = PrivinceTaxe > 4000 ? 4000 : PrivinceTaxe;
        }
    }

    let MunicipalTaxe = 0;
    let MunicipalRefund = 0;

    if (address.includes("Toronto")) {
        if (price > 55000) {
            MunicipalTaxe += 275;
            if (price > 250000) {
                MunicipalTaxe += 1950;
                if (price > 400000) {
                    MunicipalTaxe += 2250;
                    if (price > 2000000) {
                        MunicipalTaxe += 32000;
                        MunicipalTaxe += (price - 2000000) * 0.025;
                    }
                    else {
                        MunicipalTaxe += (price - 400000) * 0.02;
                    }
                }
                else {
                    MunicipalTaxe += (price - 250000) * 0.015;
                }
            }
            else {
                MunicipalTaxe += (price - 55000) * 0.01;
            }
        }
        else {
            MunicipalTaxe += price * 0.005;
        }
        //this will ignore if Toronto or any major city
        MunicipalTaxe += price * 0.005;
        if (isFisrtTimeHomeBuyer) {
            MunicipalRefund = MunicipalTaxe > 4475 ? 4475 : MunicipalTaxe;
        }
    }

    return PrivinceTaxe + MunicipalTaxe - provinceRefund - MunicipalRefund;
}





