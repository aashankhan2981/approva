export const collections={
    lenders:"lenders",
    programs:"programs",
    variants:"variants",
    contracts:"contracts",
    intrests:'intrests',
    /**  */
    applications:"applications",
    applicants:"applicants",
    applicant_groups:"applicant_groups",
    /**  */
    settings:"settings",
}

/** lenders */
export const lender={
    name:"name",
    logo:"logo",
    bunus_products:"bunus_products",
    approva_benif_portion:"approva_benif_portion",
    color:"color",
}

export const variant={
    lender:"lender",
    program:"program",
    LTV_L:"LTV_L",
    LTV_U:'LTV_U',
    FICO_L:'FICO_L',
    FICO_U:'FICO_U',
    GDS:'GDS',
    TDS:'TDS',
    bankruptcy:'bankruptcy',
    squar_footage:'squar_footage',
    population:'population',
}

export const program={
    name:"name",
    description:"description",
    purpose:"purpose",
    required_documents:"required_documents",
    groups:"groups"
}
export const contract={
    name:"name",
    LTV_L:"LTV_L",
    LTV_U:"LTV_U",
    insured:"insured",
    purpose:'purpose'
}
export const intrest={
    lender:"lender",
    contract:"contract",
    term:"term",
    fixed_rate:"fixed_rate",
    hold:"hold",
    prime_offset:"prime_offset"
}

/** applicants */
export const applicant={
    user:"user",
    groups:"groups",
    fullname:"fullname",
    email:"email",
    phone:"phone",
    province:"province",
    address:"address",
    first_time_buyer:"first_time_buyer",
    living_status:"living_status",
    rent_payment:"rent_payment",
    FICO:"FICO",
    bankruptcy:"bankruptcy",
    discharged_date:"discharged_date",
    is_co_signer:"is_co_signer",
    incomes:"incomes",
    depts:"depts",
}
export const application={
    applicants:"applicants",
    purpose:"purpose",
    proprety_type:"proprety_type",
    house_fees:"house_fees",
    using_proprty_for:"using_proprty_for",
    expected_income:"expected_income",
    first_time_buyer:"first_time_buyer",
    proprety_address:"proprety_address",
    annual_tax:"annual_tax",
    purchase_price:"purchase_price",
    down_payment:"down_payment",
    note:"note",
}
export const income={
    job_title:"job_title",
    experience:"experience",
    income_type:"income_type",
    income_amount:"income_amount",
    income_period:"income_period",
}

export const dept={
    dept_type:"dept_type",
    dept_amount:"dept_amount",
    dept_period:"dept_period",
}
export const applicant_group={
    name:"name",
}
