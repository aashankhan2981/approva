import React, { useEffect, useMemo, useState } from 'react'
import { useFillForm } from '../../../hooks'
import { CardChoicesInput, NextPrevButtuns, TextInput } from '../../inputs'
import { isEmptyArray, thereIsError } from '../../../helpers'
import * as yup from 'yup';

const PropertyCategoryShema = yup.object().shape({
    propretyType: yup.string().required("Please tell us what kind of proprty you aim to buy"),
});

export const PropertyCategoryForm = () => {
    const { propretyType, house_fees } = form

    const initialState = Object.assign({
        propretyType: propretyType.multiple ? propretyType.selectedValues : propretyType.selectedValues[0],
        house_fees: 0,
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
        yup.reach(PropertyCategoryShema, 'propretyType').validate(data.propretyType).then(() => {
            setErrors(errors => ({ ...errors, propretyType: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, propretyType: err.errors }))
        })
    }, [data])

    const isValidForm = useMemo(() =>
        isEmptyArray(Object.values(errors).filter(arr => !isEmptyArray(arr)))
        , [errors]
    )
    /** */

    return (
        <div className="flex flex-col gap-8 items-center h-full ">
            <div className='flex  flex-col h-full justify-around max-w-5xl'>
                <CardChoicesInput
                    label={propretyType.label}
                    brief={propretyType.brief}
                    multiple={propretyType.multiple}
                    isrequired={propretyType.isrequired}
                    choices={propretyType.choices}
                    defaultValue={data.propretyType}
                    onChange={(value) => setData({ ...data, propretyType: value })}
                    showErrors={showErrors}
                    errors={errors.propretyType}
                />
                <div className={`max-w-lg mt-6 w-full self-center 
                ${(data.propretyType === "condo") ? "visible" : "invisible"}`} >

                    <TextInput
                        type={house_fees.type}
                        label={house_fees.label}
                        placeholder={house_fees.placeholder}
                        isrequired={house_fees.isrequired}
                        tooltip={house_fees.tooltip}
                        readOnly={house_fees.readOnly}
                        max={house_fees.max}
                        step={house_fees.step}
                        defaultValue={data.house_fees}
                        onChange={(value) => setData({ ...data, house_fees: value })}
                    />
                </div>

                <NextPrevButtuns data={data} isValidForm={isValidForm} showTheErrors={showTheErrors} />
            </div>
        </div>
    )
}

const form = {
    propretyType: {
        label: "What type of property is it?",
        brief: "",
        multiple: false,
        isrequired: false,
        choices: [
            {
                key: "Single Family Home",
                value: "familyHome", tooltip: "",
                brief: "",
                image: "/imgs/forms/family_house.svg"
            },
            {
                key: "Condo",
                value: "condo", tooltip: "",
                brief: "",
                image: "/imgs/forms/condo.svg"
            },
            {
                key: "Duplex or Multi-Unit",
                value: "duplex", tooltip: "",
                brief: "",
                image: "/imgs/forms/duplex.svg"
            },
            {
                key: "Townhouse",
                value: "townhouse", tooltip: "",
                brief: "",
                image: "/imgs/forms/townhouse.svg"
            },

        ],
        selectedValues: [],
        tooltip: "",
    },
    house_fees: {
        label: "Condo monthly Fees",
        type: "number",
        isrequired: false,
        placeholder: " fees ",
        tooltip: "what is your monthly fees living in this condo",
        readOnly: false,
        max: 2000,
        step: 100,
    },


}