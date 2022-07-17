import React, { useEffect, useMemo, useState } from 'react'
import { checkForErrors, isEmptyArray } from '../../../helpers'
import { useFillForm } from '../../../hooks'
import { ChoiceInput, GooglePlacesInput, NextPrevButtuns, TextInput } from '../../inputs'
import * as yup from 'yup';

const ValidationShema = yup.object().shape({
    currrentAdress: yup.object().required("please enter your address").typeError("please enter your address"),
})

export const CurrentLivinStatusForm = () => {
    const {  livinStatus, rentingMonthly,currrentAdress } = form
    const initialState = Object.assign(
        {
            currrentAdress: "",
            livinStatus: livinStatus.multiple ? livinStatus.selectedValues : livinStatus.selectedValues[0],
            rentingMonthly: 0,
        }, useFillForm())

    const [data, setData] = useState(initialState)
    /** error handling */
    const [showErrors, setShowErrors] = useState(false)
    const showTheErrors = () => {
        setShowErrors(true)
    }
    /** check errors */
    const initialErrors:any={}
    const [errors, setErrors] = useState(initialErrors)
    useEffect(() => {
        for (let key of Object.keys(data)) {
            try {
                yup.reach(ValidationShema, key).validate(data[key]).then(() => {
                    setErrors(errors => ({ ...errors, [key]: [] }))
                }).catch(err => {
                    setErrors(errors => ({ ...errors, [key]: err.errors }))
                })
            }catch(err){
                continue
            } 
        }
    }, [data])

    const isValidForm = useMemo(() =>
        isEmptyArray(Object.values(errors).filter(error_arr => !isEmptyArray(error_arr)))
        , [errors])
       

    return (
        <div className="flex flex-col gap-8 w-full">
            {<GooglePlacesInput
                label={currrentAdress.label}
                isrequired={currrentAdress.isrequired}
                tooltip={currrentAdress.tooltip}
                defaultValue={data.currrentAdress}
                onChange={(value) => setData({ ...data, currrentAdress: value })}
                errors={errors.currrentAdress}
                showErrors={showErrors}
                searchOptions={{
                    types:["address"]
                }}
            />}

            <ChoiceInput
                label={livinStatus.label}
                multiple={livinStatus.multiple}
                isrequired={livinStatus.isrequired}
                choices={livinStatus.choices}
                defaultValue={data.livinStatus}
                onChange={(value) => setData({ ...data, livinStatus: value })}
                errors={errors.livinStatus}
                showErrors={showErrors}
                cols={1}
            />
            {
                <div className={data.livinStatus === "renting" ? "visible" : "invisible"}>
                    <TextInput
                        type={rentingMonthly.type}
                        label={rentingMonthly.label}
                        placeholder={rentingMonthly.placeholder}
                        isrequired={rentingMonthly.isrequired}
                        tooltip={rentingMonthly.tooltip}
                        max={rentingMonthly.max}
                        step={rentingMonthly.step}
                        defaultValue={data.rentingMonthly}
                        onChange={(value) => setData({ ...data, rentingMonthly: value })}
                        errors={errors.rentingMonthly}
                        showErrors={showErrors}
                    />
                </div>


            }


            <NextPrevButtuns data={data} isValidForm={isValidForm} showTheErrors={showTheErrors}/>
        </div>
    )
}

const form = {
    currrentAdress: {
        label: "Where do you currently live?",
        isrequired: false,
        tooltip: "Where do you currently live?",
    },
    livinStatus: {
        label: "Where do you currently live?",
        multiple: false,
        isrequired: false,
        choices: [
            /* { key: "I own my home, or have a mortgage", value: "own_home", tooltip: "" },*/
            { key: "I live with family", value: "with_family", tooltip: "" },
            { key: "I am currently renting or leasing", value: "renting", tooltip: "" },

        ],
        selectedValues: [],
        tooltip: "",
    },
    rentingMonthly: {
        label: "Monthly payment",
        type: "number",
        isrequired: false,
        placeholder: "Monthly payment",
        tooltip: "How much is your renting monthly payment",
        readOnly: false,
        max: 5000,
        step: 100,
    },



}