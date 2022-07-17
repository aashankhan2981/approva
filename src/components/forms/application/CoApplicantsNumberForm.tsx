
import React, { useEffect, useMemo, useState } from 'react'
import {  isEmptyArray } from '../../../helpers'
import { useFillForm } from '../../../hooks'
import { CoApplicantIcon, IndividualIcon, ManyCoApplicantIcon, } from '../../icons'
import { ChoiceInput, NextPrevButtuns } from '../../inputs'


export const CoApplicantsNumberForm = () => {
    const { coApplicants } = form

    const initialState = Object.assign({
        coApplicants: coApplicants.multiple ? coApplicants.selectedValues : coApplicants.selectedValues[0],
    }, useFillForm())
    const [data, setData] = useState(initialState)
    /** check errors */
    const [showErrors, setShowErrors] = useState(false)
    const showTheErrors = () => {
        setShowErrors(true)
    }
    const initialErrors:any={}
    const [errors, setErrors] = useState(initialErrors)

    useEffect(() => {
        
    }, [data])

    const isValidForm = useMemo(() =>
        isEmptyArray(Object.values(errors).filter(error_arr => !isEmptyArray(error_arr)))
        , [errors]
    )
    /** */
    return (
        <div className="flex flex-col gap-8 w-full">
            <ChoiceInput
                label={coApplicants.label}
                multiple={coApplicants.multiple}
                isrequired={coApplicants.isrequired}
                choices={coApplicants.choices}
                defaultValue={data.coApplicants}
                onChange={(value) => setData({ ...data, coApplicants: value })}
                errors={errors.coApplicants}
                showErrors={showErrors}
            />
            <NextPrevButtuns data={data} isValidForm={isValidForm} showTheErrors={showTheErrors}  />
        </div>
    )
}

const form = {
    coApplicants: {
        label: "How many people are on the application?",
        multiple: false,
        isrequired: true,
        choices: [
            { key: <Individual />, value: "individual", tooltip: "" },
            { key: <CoApplicant />, value: "co_applicant", tooltip: "" },
            { key: <ManyCoApplicant />, value: "3_or_more", tooltip: "" },
        ],
        selectedValues: [],
        tooltip: "",
    },
}

function Individual() {
    return (
        <div className='flex flex-col items-center gap-2'>
            <IndividualIcon className="w-12 h-12 " />
            <h6>Individual</h6>
        </div>
    )
}

function CoApplicant() {
    return (
        <div className='flex flex-col items-center gap-2'>
            <CoApplicantIcon className="w-12 h-12 " />
            <h6>Co-Applicant</h6>
        </div>
    )
}
function ManyCoApplicant() {
    return (
        <div className='flex flex-col items-center gap-2'>
            <ManyCoApplicantIcon className="w-12 h-12" />
            <h6>Co-signer</h6>
        </div>
    )
}