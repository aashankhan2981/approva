export type rankingAttributeType="monthlyPayment"|"cashback"|"prePaymentAbility"|"bankSize"|"paymentFlexibilityFirstMonth"|"paymentFlexibilityMissOne"|"onlineBanking"|"HELOC"|"creditCard"|"bundlePricing"|"overdraftProtection"|"multipleBranch"|"responsivity"|"hasCashBack"|"documentationRequirement"
export type LenderType={
    id:string;
    name:string;
    logo:string;
    bunus_products:string;
    approva_benif_portion:number;
    color:string;
    prepaymentAbility: PrepaymentAbilityLevel;
    bankSize: BankSize;
    paymentFlexibilityFirstMonth: boolean;
    paymentFlexibilityMissOne: boolean;
    onLineBanking: boolean;
    Heloc: boolean;
    creditCard: boolean;
    bundlePricing: boolean;
    overdraftProtection: boolean;
    multipleBranch: boolean;
    responsivity: ResponsivityLevel;
    hasCashBack: boolean;
    documentationRequired: DocumentationRequirementLevel;
}

export enum BankSize {
    Small = "small",
    Medium = "medium",
    Big = "big"
};
export enum ResponsivityLevel {
    Short = "short",
    Medium = "medium",
    Long = "long"
};
export enum DocumentationRequirementLevel {
    High = "high",
    Medium = "medium",
    Low = "low"
};
export enum PrepaymentAbilityLevel {
    High = "high",
    Medium = "medium",
    No = "no"
};


export type ProgramType={
    id:string;
    name:string;
}

export enum RATE {
    fixed = "fixed",
    variable = "variable",
}

export type FilterType = {
    refinance?: boolean;
    ensured?: boolean;
    amortization?: number;
    rate?: RATE;
    term?: number | string;
}
export enum CITIZEN_STATUS {
    canadien = "canadien",
    parmanent = "parmanent",
    work_permit = "work_permit"
}
export enum MORITAL_STATUS {
    single = "single",
    married = "married",
    divorced = "divorced",
    common_law = "common_law",
}
export enum LIVIN_STATUS {
    with_family = "with_family",
    renting = "renting",
}
export enum INCOME_TYPE {
    salaried = "salaried",
    self_employed = "self_employed",
    hourly = "hourly",
    part_time = "part_time",
    other = "other"
}
export enum PAYMENT_RATE {
    annually = "annually",
    monthly = "monthly",
    weekley = "weekley"
}
export type IncomeType = {
    jobeTitle?: string,
    startingDate?: Date,
    incomeType?: INCOME_TYPE
    incomeAmount: number,
    incomeRate: PAYMENT_RATE
}
export enum DEBT_ENUM {
    school_loan = "school_loan",
    car_loan = "car_loan",
    credit_card_loan = "credit_card_loan",
    personal_loan = "personal_loan",
    other = "other"
}
export type DebtType = {
    debtType: DEBT_ENUM,
    debtAmount: number,
    debtRate: PAYMENT_RATE
}

export type ApplicantType = {
    type?: "main" | "co_applicant" | "co_signer";
    fullName?: string;
    email?: string;
    phone?: string;
    province?: string;
    user?: string;
    sitizenStatus?: CITIZEN_STATUS;
    moritalStatus?: MORITAL_STATUS;
    currrentAdress?: any;
    livinStatus?: LIVIN_STATUS;
    rentingMonthly?: number;
    incomes: IncomeType[];
    FICO?: number;
    bunkrupcy: "no" | "yes";
    dischardedDate?: Date;
    debts: DebtType[]
}


export enum APPLICATION_PURPOSE {
    purchase = "purchase",
    refinance = "refinance",
    per_approval = "per_approval"
}
export enum PROPRETY_TYPE {
    condo = "condo",
    duplex = "duplex",
    town_house = "town_house",
    family_home = "family_home"
}
export enum PROPRETY_USAGE {
    living_in = "living_in",
    living_and_rent = "living_and_rent",
    investment = "investment",
    cottage = "cottage"
}
export enum FIRST_TIME_BUYING {
    first_time = "first_time",
    not_first_time = "not_first_time"
}
export type ApplicationType = {
    applicants: ApplicantType[];
    user?: string;
    lookingFor?: APPLICATION_PURPOSE;
    propretyType?: PROPRETY_TYPE;
    house_fees?: number;
    purpose?: PROPRETY_USAGE;
    expected_income?: number;
    firestTime?: FIRST_TIME_BUYING;
    homeAdress?: any;
    annualTax?: number;
    estimativeAnnualTax?: number;
    purchacePrice?: number;
    downPayment: number;
    checked?: boolean;
    note?: string | null;
    tags?: string[] | null;
    createdate?: Date;
}

export type ChekingType = {
    checkerValue: boolean;
    inputValue: any;
}
export type AttribuetsType = {
    monthlyPayment: number;
    cashback: number;
    prePaymentAbility: number,
    bankSize: number,
    paymentFlexibilityFirstMonth: number,
    paymentFlexibilityMissOne: number,
    onlineBanking: number,
    HELOC: number,
    creditCard: number,
    bundlePricing: number,
    overdraftProtection: number,
    multipleBranch: number,
    responsivity: number,
    hasCashBack: number,
    documentationRequirement: number,
}
export type MonthlyPaymentType = {
    amortization: number;
    term: number | string;
    intrestRate: number;
    ensured: boolean;
    value: number;
}

export type OutPutType = {
    fixedRateMonthlyPayment: MonthlyPaymentType | null;
    variableRateMonthlyPayment: MonthlyPaymentType | null;
    approvaCashBack: number;
    bankCashBack: number;
    fico: number;
    gds: number;
    tds: number;
}

export type VariantOutput = {
    results: ChekingType[],
    attributes: AttribuetsType,
    output: OutPutType,
}

export type CheckerInputType = {
    applicant_type: INCOME_TYPE,
    isCanadian: boolean,
    applicantsNumber: number,
    purpose: APPLICATION_PURPOSE,
    usage: PROPRETY_USAGE,
    price: number,
    LTV: number,
    mortgage: number,
    address: string,
    FICO: number | number[],
    GDS: number,
    TDS: number,
    bunkrupcy: number,
    population: number,
    squarfeet: number,
    isFistTimeBuyer: boolean,
    propretyType: PROPRETY_TYPE,
    condoFloor?: number | null,
    unitsNumber?: number | null,
    targetTenant?: any,
    rentalDuration?: number | null,
    applicantTotalProperties?: null,
    amortization: number,
    rate: RATE,
    term: number | string,
    ensured: boolean,

    rankingPayment: number,
    fixedRateMonthlyPayment: MonthlyPaymentType,
    variableRateMonthlyPayment: MonthlyPaymentType,
}

export type CheckerFunction = (
    (input: CheckerInputType) => boolean
);

