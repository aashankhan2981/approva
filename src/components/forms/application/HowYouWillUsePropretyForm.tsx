import React, { useEffect, useMemo, useState } from 'react'
import { isEmptyArray, thereIsError } from '../../../helpers'
import { useFillForm } from '../../../hooks'
import { CardChoicesInput, NextPrevButtuns, TextInput } from '../../inputs'
import * as yup from 'yup';


const HowYouWillUsePrepretyShema = yup.object().shape({
    purpose: yup.string().required("Please tell us how you want to use this house"),
    expected_income: yup.number(),
});

export const HowYouWillUsePrepretyForm = () => {
    const { purpose, expected_income } = form

    const initialState = Object.assign({
        purpose: purpose.multiple ? purpose.selectedValues : purpose.selectedValues[0],
        expected_income: 0,
    }, useFillForm())

    const [data, setData] = useState(initialState)

    /** error handling */
    const [showErrors, setShowErrors] = useState(false)
    const showTheErrors = () => {
        setShowErrors(true)
    }

    const initialErrors:any={}
    const [errors, setErrors] = useState(initialErrors)

    useEffect(() => {
        yup.reach(HowYouWillUsePrepretyShema, 'purpose').validate(data.purpose).then(() => {
            setErrors(errors => ({ ...errors, purpose: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, purpose: err.errors }))
        })
        yup.reach(HowYouWillUsePrepretyShema, 'expected_income').validate(data.expected_income).then(() => {
            setErrors(errors => ({ ...errors, expected_income: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, expected_income: err.errors }))
        })
    }, [data])
    const isValidForm = useMemo(() =>
        isEmptyArray(Object.values(errors).filter(arr => !isEmptyArray(arr)))
        , [errors]
    )
    /** */

    return (
        <div className="flex flex-col gap-8 items-center ">
            <div className=' max-w-5xl flex flex-col gap-4'>

                <CardChoicesInput
                    label={purpose.label}
                    brief={purpose.brief}
                    multiple={purpose.multiple}
                    isrequired={purpose.isrequired}
                    choices={purpose.choices}
                    defaultValue={initialState.purpose}
                    onChange={(value) => setData({ ...data, purpose: value })}
                    showErrors={showErrors}
                    errors={errors.purpose}
                />
                <div className={`max-w-lg w-full self-center 
                ${(data.purpose === "living_and_rent" || data.purpose === "investment") ? "visible" : " invisible"}`} >

                    <TextInput
                        type={expected_income.type}
                        label={expected_income.label}
                        placeholder={expected_income.placeholder}
                        isrequired={expected_income.isrequired}
                        tooltip={expected_income.tooltip}
                        readOnly={expected_income.readOnly}
                        max={expected_income.max}
                        step={expected_income.step}
                        defaultValue={data.expected_income}
                        onChange={(value) => setData({ ...data, expected_income: value })}
                    />
                </div>

                <NextPrevButtuns data={data} isValidForm={isValidForm} showTheErrors={showTheErrors} />
            </div>
        </div>
    )
}

const form = {
    purpose: {
        label: "How will you be using the property?",
        brief: "",
        multiple: false,
        isrequired: false,
        choices: [
            {
                key: "I'll be living in this home",
                value: "living_in", tooltip: "",
                brief: "",
                image: "/imgs/forms/livingin.svg"
            },
            {
                key: "Living in and rent a part",
                value: "living_and_rent", tooltip: "",
                brief: "",
                image: "/imgs/forms/rent_part.svg"
            },
            {
                key: "Rent out to Tenant, Investment Property",
                value: "investment", tooltip: "",
                brief: "",
                image: "/imgs/forms/rentout.svg"
            },
            {
                key: "Second home, Cottage",
                value: "cottage", tooltip: "",
                brief: "",
                image: "/imgs/forms/secondhome.svg"
            },

        ],
        selectedValues: [],
        tooltip: "",
    },
    expected_income: {
        label: "Expected Income from renting it out",
        type: "number",
        isrequired: false,
        placeholder: "Expected Income ",
        tooltip: "How much you will get renting out ",
        readOnly: false,
        max: 5000,
        step: 100,
    },


}