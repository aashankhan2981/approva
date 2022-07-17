import { Button } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { checkForErrors, isEmptyArray } from '../../../helpers'
import { useFillForm } from '../../../hooks'
import { TextInput, NextPrevButtuns, GooglePlacesInput } from '../../inputs'
import * as yup from 'yup';
import { getAnnualTax } from '../../../engines/calculation'

const budgetSchema = yup.object().shape({
    homeAdress: yup.object().typeError("Please Enter your home adress"),
    purchacePrice: yup.number().required("Please tell us what is the approximate purchase price").min(50000, "purchase price must be >=50000"),
    downPayment: yup.number().required("Please tell us what is your down payment").when(['purchacePrice'], (purchacePrice, schema) => {
        return (purchacePrice < 1000000 ? schema.min(purchacePrice * (5 / 100), "Down payment must be at least 5%")
            : schema.min(purchacePrice * (20 / 100), "When purchase price is more than $1M, Down payment must be at least 20%"));
    }),
    annualTax: yup.number().required("tell us what is the annual tax"),
})

export const BadgetForm = () => {
    const { homeAdress, annualTax, estimativeAnnualTax, purchacePrice, downPayment } = form
    const initialState = Object.assign(
        {
            homeAdress: "",
            purchacePrice: 0,
            downPayment: 0,
            annualTax: 0,
            estimativeAnnualTax: 0,
        }, useFillForm())


    const [data, setData] = useState(initialState)

    /** error handling */
    const [showErrors, setShowErrors] = useState(false)
    const showTheErrors = () => {
        setShowErrors(true)
    }
    const initialErrors: any = {}
    const [errors, setErrors] = useState(initialErrors)
    const [showAnnualTax, setShowAnnualTax] = useState(true)

    useEffect(() => {
        yup.reach(budgetSchema, 'homeAdress').validate(data.homeAdress).then(() => {
            setErrors(errors => ({ ...errors, homeAdress: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, homeAdress: err.errors }))
        })
        yup.reach(budgetSchema, 'purchacePrice').validate(data.purchacePrice).then(() => {
            setErrors(errors => ({ ...errors, purchacePrice: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, purchacePrice: err.errors }))
        })
        budgetSchema.validate({
            purchacePrice: data.purchacePrice,
            downPayment: data.downPayment,
            annualTax: 100,// this is just to ignore // annual tax error
            homeAdress: {},//this is just to ignore adress error
        }).then(() => {
            setErrors(errors => ({ ...errors, downPayment: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, downPayment: err.errors }))
        })
        yup.reach(budgetSchema, 'annualTax').validate(data.annualTax).then(() => {
            setErrors(errors => ({ ...errors, annualTax: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, annualTax: err.errors }))
        })
        yup.reach(budgetSchema, 'annualTax').validate(data.estimativeAnnualTax).then(() => {
            setErrors(errors => ({ ...errors, estimativeAnnualTax: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, estimativeAnnualTax: err.errors }))
        })
    }, [data])

    const isValidForm = useMemo(() =>
        isEmptyArray(Object.values(errors).filter(error_arr => !isEmptyArray(error_arr)))
        , [errors]
    )
    /** */

    /** this sould be done with some api */


    function getAmountRequired() {
        const { purchacePrice, downPayment } = data
        if (purchacePrice - downPayment >= 0) {
            const diff = Math.floor(purchacePrice - downPayment)
            const percentage = Math.floor(((downPayment) / purchacePrice) * 100)
            return { morgage: diff, percentage: percentage || 0 }
        }
        return { morgage: "-", percentage: 0 }
    }

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex justify-center">
                <div className='flex flex-col gap-6 pl-6 items-center justify-center text-[#398ECE] w-1/2 p-2'>
                        <p className=' flex items-center text-2xl text-dark text-center'> DownPayment %age : <span
                            className='text-5xl text-[#398ECE]'> %{getAmountRequired().percentage}</span></p>
                        <span className=' absolute -top-1 -right-3 text-base  text-grey font-semibold'>%</span>
                    <div>
                        <p className='flex items-center text-sm text-dark text-center'> Morgage amount needed is: <span
                            className='text-lg text-[#398ECE]'> ${getAmountRequired().morgage}</span></p>
                    </div>
                </div>
            </div>
            <div className=' z-10'>
                <GooglePlacesInput label={homeAdress.label}
                    isrequired={homeAdress.isrequired}
                    tooltip={homeAdress.tooltip}
                    defaultValue={data.homeAdress}
                    onChange={(value) => setData({
                        ...data,
                        homeAdress: value,
                        annualTax: getAnnualTax(value.label, data.purchacePrice)
                    })}
                    errors={errors.homeAdress}
                    showErrors={showErrors}
                />
            </div>

            <div className='flex justify-center'>
                <div className='flex flex-col w-[750px] justify-center'>
                    <TextInput
                        type={purchacePrice.type}
                        label={purchacePrice.label}
                        classes={{labelParent: "flex items-center gap-1 justify-center"}}
                        placeholder={purchacePrice.placeholder}
                        isrequired={purchacePrice.isrequired}
                        tooltip={purchacePrice.tooltip}
                        max={purchacePrice.max}
                        step={purchacePrice.step}
                        defaultValue={data.purchacePrice}
                        onChange={(value) => setData(
                            {
                                ...data,
                                purchacePrice: parseFloat(value),
                                annualTax: getAnnualTax(data.homeAdress?.label, value)
                            })
                        }
                        errors={errors.purchacePrice}
                        showErrors={showErrors}

                    />
                    <TextInput
                        type={downPayment.type}
                        label={downPayment.label}
                        classes={{labelParent: "flex items-center gap-1 justify-center"}}
                        placeholder={downPayment.placeholder}
                        isrequired={downPayment.isrequired}
                        tooltip={downPayment.tooltip}
                        max={data.purchacePrice}
                        step={downPayment.step}
                        defaultValue={data.downPayment}
                        onChange={(value) => setData(
                            { ...data, downPayment: parseFloat(value), })
                        }
                        errors={errors.downPayment}
                        showErrors={showErrors}
                    />

                </div>
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col w-[750px] gap-3'>
                    <div className={'flex items-center w-[750px] gap-2'}>
                        <TextInput disabled={getAnnualTax(data.homeAdress.label, data.purchacePrice) > 0 || !showAnnualTax}
                            type={annualTax.type}
                            classes={{ parent: "flex flex-col flex-grow gap-2 w-[550px] " + (!showAnnualTax ? " opacity-40" : ""), labelParent: "flex items-center gap-1 justify-center" }}
                            label={annualTax.label}
                            placeholder={annualTax.placeholder}
                            isrequired={annualTax.isrequired}
                            tooltip={annualTax.tooltip}
                            readOnly={true}
                            max={annualTax.max}
                            step={annualTax.step}
                            defaultValue={data.annualTax}
                            onChange={()=>{}}
                            errors={showAnnualTax && errors.annualTax}
                            showErrors={showAnnualTax && showErrors}
                        >
                        </TextInput>
                        <div className="mt-[35px]">
                            {showAnnualTax ?
                                <Button variant="text" size='large' onClick={() => setShowAnnualTax(false)}
                                        className={'border border-gray-400 ml-[20px] h-10 py-2 lg:py-6 text-lg text-[#398ECE] box-border font-bold'}>
                                    Manual
                                </Button> :
                                <Button variant="text" size='large' onClick={() => setShowAnnualTax(true)}
                                        className={'border border-gray-400 ml-[20px] h-10 py-2 lg:py-6 text-lg text-[#398ECE] box-border font-bold'}>
                                    Auto
                                </Button>
                            }
                        </div>
                    </div>
                    <TextInput disabled={showAnnualTax}
                        type={estimativeAnnualTax.type}
                        classes={{ parent: "flex flex-col flex-grow gap-2" + (showAnnualTax ? " opacity-40" : ""), labelParent: "flex items-center gap-1 justify-center" }}
                        label={estimativeAnnualTax.label}
                        placeholder={estimativeAnnualTax.placeholder}
                        isrequired={estimativeAnnualTax.isrequired}
                        tooltip={estimativeAnnualTax.tooltip}
                        max={estimativeAnnualTax.max}
                        defaultValue={data.estimativeAnnualTax}
                        onChange={(value) => setData({ ...data, estimativeAnnualTax: value })}
                        errors={!showAnnualTax && errors.estimativeAnnualTax}
                        showErrors={!showAnnualTax && showErrors}
                    >
                    </TextInput>
                </div>
            </div>
            <NextPrevButtuns data={data} isValidForm={isValidForm} showTheErrors={showTheErrors} />
        </div>
    )
}

const form = {
    homeAdress: {
        label: "What City/Town is your Dream Home located?",
        isrequired: false,
        tooltip: "",
    },
    annualTax: {
        label: "Annual Property Tax (Approva Estimate)",
        type: "number",
        isrequired: false,
        placeholder: "Annual Tax",
        tooltip: "the Annual tax for the property",
        readOnly: false,
        max: 20000,
        step: 100,
    },
    estimativeAnnualTax: {
        label: "Annual Property Tax (Your Estimate)",
        type: "number",
        isrequired: false,
        placeholder: "Annual Tax",
        tooltip: "the Annual tax for the property",
        readOnly: false,
        max: 20000,
        step: 100,
    },
   
    purchacePrice: {
        label: "What is the purchase price of the home?",
        type: "number",
        isrequired: true,
        placeholder: "Purchace Price",
        tooltip: "purchase price of the home",
        readOnly: false,
        max: 3000000,
        step: 1000
    },
    downPayment: {
        label: "How much is your down payment?",
        type: "number",
        isrequired: true,
        placeholder: "Down Payment",
        tooltip: "",
        readOnly: false,
        max: 10000000,
        step: 100,
    },


}
