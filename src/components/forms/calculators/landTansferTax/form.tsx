import { Button } from '@mui/material'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { checkForErrors, isEmptyArray } from '../../../../helpers'
import { TextInput, CheckBoxInput, GooglePlacesInput } from '../../../inputs'
import * as yup from 'yup';
import { ApplicationType, DEBT_ENUM, PAYMENT_RATE } from '../../../../engines/programs/types';
import { LandTransferTaxeCalculator } from '../../../../engines/calculators';

const landTransferTaxShcema = yup.object().shape({
    city: yup.object().typeError("Please Enter the City in witch you want to purchase proprety"),
    price: yup.number().required("tell us what is the purchase price"),
    firstTimeBuyer: yup.bool(),
})

export const LandTransferTax = () => {
    const { city, price, firstTimeBuyer } = form
    const initialState = (
        {
            city: "",
            price: 0,
            firstTimeBuyer: false
        }
    )
    const [data, setData] = useState(initialState)

   


    /** error handling */
    const [showErrors, setShowErrors] = useState(false)
    const showTheErrors = () => {
        setShowErrors(true)
    }
    const initialErrors: any = {}
    const [errors, setErrors] = useState(initialErrors)

    useEffect(() => {

        yup.reach(landTransferTaxShcema, 'city').validate(data.city).then(() => {
            setErrors(errors => ({ ...errors, city: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, city: err.errors }))
        })

        yup.reach(landTransferTaxShcema, 'price').validate(data.price).then(() => {
            setErrors(errors => ({ ...errors, price: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, price: err.errors }))
        })

        yup.reach(landTransferTaxShcema, 'firstTimeBuyer').validate(data.firstTimeBuyer).then(() => {
            setErrors(errors => ({ ...errors, firstTimeBuyer: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, firstTimeBuyer: err.errors }))
        })

    }, [data])

    const isValidForm = useMemo(() =>
        isEmptyArray(Object.values(errors).filter(error_arr => !isEmptyArray(error_arr)))
        , [errors]
    )
   
    const CalculateLandTransferTaxe = () => {
        if (!showErrors || !isValidForm) return "-"
        
        return "$"+LandTransferTaxeCalculator(data.price,data.city,data.firstTimeBuyer);
    }

    /** */


    return (
        <div className="flex flex-col gap-8 w-full">

            <GooglePlacesInput
                label={city.label}
                isrequired={city.isrequired}
                tooltip={city.tooltip}
                defaultValue={data.city}
                onChange={(value) => setData({ ...data, city: value })}
                errors={errors.city}
                showErrors={showErrors}
                searchOptions={
                    {
                        types: ["(cities)"]
                    }
                }
            />

            <div className='flex flex-col'>

                <TextInput
                    type={price.type}
                    label={price.label}
                    placeholder={price.placeholder}
                    isrequired={price.isrequired}
                    tooltip={price.tooltip}
                    max={price.max}
                    step={price.step}
                    defaultValue={data.price}
                    onChange={(value) => setData(
                        { ...data, price: parseFloat(value), })
                    }
                    errors={errors.price}
                    showErrors={showErrors}
                />

                <CheckBoxInput 
                    label={firstTimeBuyer.label}
                    isrequired={firstTimeBuyer.isrequired}
                    defaultValue={data.firstTimeBuyer}
                    onChange={(value) => setData(
                        { ...data, firstTimeBuyer:value, })
                    }
                />
                

            </div>


            <Button
                sx={{ padding: 2, textTransform: "none", background: '#1D72E8' }}
                variant='contained'
                onClick={() => showTheErrors()}
            >
                Calculate Land Transfer Tax
            </Button>
            {

                <Button
                    variant="text"
                    color={isValidForm?"success":"error"}
                    sx={{ padding: 2 }}

                >
                    <div className='flex items-center'>
                        <span>The Land Transfer Tax is </span>
                        <span className='text-lg ml-4'> {CalculateLandTransferTaxe()}</span>
                    </div>

                </Button>

            }



        </div>
    )
}

const form = {
    city: {
        label: "What City/Province is your Dream Home located?",
        isrequired: false,
        tooltip: "",
    },
    price: {
        label: "What is the purchase price",
        type: "number",
        isrequired: true,
        placeholder: "purchase price",
        tooltip: "this is the price of the home that your going to purchase",
        readOnly: false,
        max: 3000000,
        step: 1000,
    },
    firstTimeBuyer: {
        label: "Is it your first time buying a home?",
        isrequired: true,
        defaultValue: false,
    },




}