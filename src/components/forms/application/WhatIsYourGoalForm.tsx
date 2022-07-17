import React, { useEffect, useMemo, useState } from 'react'
import { FillObject } from '../../../helpers'
import { isEmptyArray } from '../../../helpers'
import { useFillForm } from '../../../hooks'
import { CardChoicesInput, NextPrevButtuns } from '../../inputs'
import * as yup from 'yup';

const WhatIsYourGoalShema = yup.object().shape({
    lookingFor: yup.string().required("Please tell us what are you looking for"),
});

export const WhatIsYourGoalForm = () => {
    const { lookingFor } = form
    
    /** data handling */
    const initialState = FillObject({
        lookingFor: lookingFor.multiple ? lookingFor.selectedValues : lookingFor.selectedValues[0],
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
        yup.reach(WhatIsYourGoalShema, 'lookingFor').validate(data.lookingFor).then(() => {
            setErrors(errors => ({ ...errors, lookingFor: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, lookingFor: err.errors }))
        })
    }, [data])

    const isValidForm = useMemo(() =>
        isEmptyArray(Object.values(errors).filter(arr => !isEmptyArray(arr)))
        , [errors]
    )

    /** */

    return (
        <div className="flex flex-col flex-wrap gap-8 h-full  items-center">
            <div className='flex flex-col  h-full justify-around max-w-5xl'>
                <CardChoicesInput
                    label={lookingFor.label}
                    brief={lookingFor.brief}
                    multiple={lookingFor.multiple}
                    isrequired={lookingFor.isrequired}
                    choices={lookingFor.choices}
                    defaultValue={data.lookingFor}
                    onChange={(value) => setData({ ...data, lookingFor: value })}
                    showErrors={showErrors}
                    errors={errors.lookingFor}
                />
                <NextPrevButtuns data={data} isValidForm={isValidForm} showTheErrors={showTheErrors} />
            </div>
        </div>
    )
}

const form = {
    lookingFor: {
        label: "What is your Goal?",
        brief: "Select which mortgage to find the best results.",
        multiple: false,
        isrequired: false,
        choices: [
            {
                key: "I am looking for a home",
                value: "pre_approval", tooltip: "",
                brief: "I'd like to get pre-approved",
                image: "/imgs/forms/looking_at_home.svg"
            },
            {
                key: "I have purchased a home",
                value: "purchase", tooltip: "",
                brief: "I am looking to get approved",
                image: "/imgs/forms/purchased.svg"
            },
            {
                key: "I am refinancing or switching",
                value: "refinance", tooltip: "",
                brief: "Refinance/Switch to a money saving morgage",
                image: "/imgs/forms/refinance.svg"
            },

        ],
        selectedValues: [],
        tooltip: "",
    },


}