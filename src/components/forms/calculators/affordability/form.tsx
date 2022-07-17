import { Button } from '@mui/material'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { checkForErrors, isEmptyArray } from '../../../../helpers'
import { TextInput, NextPrevButtuns, GooglePlacesInput } from '../../../inputs'
import * as yup from 'yup';
import { ApplicationType, DEBT_ENUM, PAYMENT_RATE } from '../../../../engines/programs/types';
import { howMuchCanIAffordCalculator } from '../../../../engines/calculators';
import { useFormik } from 'formik';

const affordabilityShcema = yup.object({
    city: yup.object().required("Please Enter the City in witch you want to purchase proprety"),
    income: yup.number().required("tell us what is the annual tax").min(1000, "your income must be greater than 1000"),
    coApplicantsIncome: yup.number().required("Please tell us what is the approximate purchase price"),
    downPayment: yup.number().required("Please tell us what is your down payment").min(50000, "Down payment must be greater than 50000"),
    annualTax: yup.number().required("tell us what is the annual tax"),
    CondoFees: yup.number().required("tell us what is the annual tax"),
    creditcardPayment: yup.number().required("tell us what is the annual tax"),
    carPayment: yup.number().required("tell us what is the annual tax"),
    otherLoansPayments: yup.number().required("tell us what is the annual tax"),
})

export const HowMuchCanIAffordForm = () => {
    const { income, coApplicantsIncome, downPayment, city, creditcardPayment, carPayment, otherLoansPayments } = form

    const formik = useFormik({
        initialValues: {
            city: "",
            income: 0,
            coApplicantsIncome: 0,
            downPayment: 0,
            creditcardPayment: 0,
            carPayment: 0,
            otherLoansPayments: 0,
        },
        validationSchema: affordabilityShcema,
        onSubmit: (values) => {   
        },
    });
    
    

    const HowMuchCanIAfford = useMemo(() => {
        
        const app: ApplicationType = {
            homeAdress: formik.values.city,
            downPayment: formik.values.downPayment,
            applicants: [
                {
                    incomes: [
                        {
                            incomeAmount: formik.values.income,
                            incomeRate: PAYMENT_RATE.monthly
                        }
                    ],
                    bunkrupcy: "no",
                    debts: [
                        {
                            debtType: DEBT_ENUM.car_loan,
                            debtAmount: formik.values.carPayment,
                            debtRate: PAYMENT_RATE.monthly
                        },
                        {
                            debtType: DEBT_ENUM.credit_card_loan,
                            debtAmount: formik.values.creditcardPayment,
                            debtRate: PAYMENT_RATE.monthly
                        },
                        {
                            debtType: DEBT_ENUM.other,
                            debtAmount: formik.values.otherLoansPayments,
                            debtRate: PAYMENT_RATE.monthly
                        }
                    ]
                },
                {
                    incomes: [
                        {
                            incomeAmount: formik.values.coApplicantsIncome,
                            incomeRate: PAYMENT_RATE.monthly
                        }
                    ],
                    bunkrupcy: "no",
                    debts: []
                }
            ],
        };
        return howMuchCanIAffordCalculator(app, {});
    },[formik.values]) 

    /** */


    return (

        <div className="flex flex-col gap-8 w-full">
            <form onSubmit={formik.handleSubmit}>
                <GooglePlacesInput
                    label={city.label}
                    isrequired={city.isrequired}
                    tooltip={city.tooltip}
                    defaultValue={formik.values.city}
                    onChange={(value) => formik.setFieldValue("city", value)}
                    errors={[formik.errors.city]}
                    showErrors={formik.touched.city && Boolean(formik.errors.city)}
                    searchOptions={
                        {
                            types: ["(cities)"]
                        }
                    }
                />

                <div className='flex flex-col'>

                    <TextInput
                        type={income.type}
                        label={income.label}
                        placeholder={income.placeholder}
                        isrequired={income.isrequired}
                        tooltip={income.tooltip}
                        max={income.max}
                        step={income.step}
                        defaultValue={formik.values.income}
                        onChange={(value) => formik.setFieldValue("income", value)}
                        errors={[formik.errors.income]}
                        showErrors={formik.touched.income && Boolean(formik.errors.income)}
                    />
                    <TextInput
                        type={coApplicantsIncome.type}
                        label={coApplicantsIncome.label}
                        placeholder={coApplicantsIncome.placeholder}
                        isrequired={coApplicantsIncome.isrequired}
                        tooltip={coApplicantsIncome.tooltip}
                        max={coApplicantsIncome.max}
                        step={coApplicantsIncome.step}
                        defaultValue={formik.values.coApplicantsIncome}
                        onChange={(value) => formik.setFieldValue("coApplicantsIncome", value)}
                        errors={[formik.errors.coApplicantsIncome]}
                        showErrors={formik.touched.coApplicantsIncome && Boolean(formik.errors.coApplicantsIncome)}
                    />
                    <TextInput
                        type={downPayment.type}
                        label={downPayment.label}
                        placeholder={downPayment.placeholder}
                        isrequired={downPayment.isrequired}
                        tooltip={downPayment.tooltip}
                        max={downPayment.max}
                        step={downPayment.step}
                        defaultValue={formik.values.downPayment}
                        onChange={(value) => formik.setFieldValue("downPayment", value)}
                        errors={[formik.errors.downPayment]}
                        showErrors={formik.touched.downPayment && Boolean(formik.errors.downPayment)}
                    />
                    <TextInput
                        type={carPayment.type}
                        label={carPayment.label}
                        placeholder={carPayment.placeholder}
                        isrequired={carPayment.isrequired}
                        tooltip={carPayment.tooltip}
                        max={carPayment.max}
                        step={carPayment.step}
                        defaultValue={formik.values.carPayment}
                        onChange={(value) => formik.setFieldValue("carPayment", value)}
                        errors={[formik.errors.carPayment]}
                        showErrors={formik.touched.creditcardPayment && Boolean(formik.errors.creditcardPayment)}
                    />
                    <TextInput
                        type={creditcardPayment.type}
                        label={creditcardPayment.label}
                        placeholder={creditcardPayment.placeholder}
                        isrequired={creditcardPayment.isrequired}
                        tooltip={creditcardPayment.tooltip}
                        max={creditcardPayment.max}
                        step={creditcardPayment.step}
                        defaultValue={formik.values.creditcardPayment}
                        onChange={(value) => formik.setFieldValue("creditcardPayment", value)}
                        errors={[formik.errors.creditcardPayment]}
                        showErrors={formik.touched.creditcardPayment && Boolean(formik.errors.creditcardPayment)}
                    />
                    <TextInput
                        type={otherLoansPayments.type}
                        label={otherLoansPayments.label}
                        placeholder={otherLoansPayments.placeholder}
                        isrequired={otherLoansPayments.isrequired}
                        tooltip={otherLoansPayments.tooltip}
                        max={otherLoansPayments.max}
                        step={otherLoansPayments.step}
                        defaultValue={formik.values.otherLoansPayments}
                        onChange={(value) => formik.setFieldValue("otherLoansPayments", value)}
                        errors={[formik.errors.otherLoansPayments]}
                        showErrors={formik.touched.otherLoansPayments && Boolean(formik.errors.otherLoansPayments)}
                    />

                </div>


                <Button
                    sx={{ padding: 2, textTransform: "none" , background: '#1D72E8'}}
                    variant='contained'
                    type="submit"
                >
                    See How much you can Afford
                </Button>



                <div style={{ padding: "2rem" }}>
                    <div className='flex items-center'>
                        <span>Max purchase Price you can afford is </span>
                        <span className='text-lg ml-4'> ${HowMuchCanIAfford}</span>
                    </div>
                </div>
            </form>
        </div>
    )
}

const form = {
    city: {
        label: "What City/Town is your Dream Home located?",
        isrequired: false,
        tooltip: "",
    },
    income: {
        label: "What is your monthly income",
        type: "number",
        isrequired: false,
        placeholder: "Estimate",
        tooltip: "Estimative Annual tax based on the proprety area",
        readOnly: true,
        max: 20000,
        step: 100,
    },
    coApplicantsIncome: {
        label: "What is your co-applicants monthly income",
        type: "number",
        isrequired: false,
        placeholder: "Annual Tax",
        tooltip: "the Annual tax for the property",
        readOnly: false,
        max: 20000,
        step: 100,
    },
    downPayment: {
        label: "How much is your down payment?",
        type: "number",
        isrequired: true,
        placeholder: "Down Payment",
        tooltip: "",
        readOnly: false,
        max: 500000,
        step: 1000,
    },
    carPayment: {
        label: "How much is your monthly car loan payment",
        type: "number",
        isrequired: true,
        placeholder: "Purchace Price",
        tooltip: "if you have car loan, how much is your monthly payment for this loan",
        readOnly: false,
        max: 3000,
        step: 100
    },

    creditcardPayment: {
        label: "How much is your monthly credit card payment",
        type: "number",
        isrequired: true,
        placeholder: "Purchace Price",
        tooltip: "how much your credit card cost you per month",
        readOnly: false,
        max: 3000,
        step: 100
    },

    otherLoansPayments: {
        label: "How much is your other Loan expences monthly payment",
        type: "number",
        isrequired: true,
        placeholder: "Purchace Price",
        tooltip: "total other debts payments despite credit card and car loans",
        readOnly: false,
        max: 3000,
        step: 100
    },

}