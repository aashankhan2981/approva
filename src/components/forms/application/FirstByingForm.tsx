import React, { useEffect, useMemo, useState } from 'react'
import { isEmptyArray, thereIsError } from '../../../helpers'
import { useFillForm } from '../../../hooks'
import { CardChoicesInput, ChoiceInput, NextPrevButtuns } from '../../inputs'
import * as yup from 'yup';


const FirstBuyingShema = yup.object().shape({
    firestTime: yup.string().required("please select an option"),
});
export const FirstBuyingForm = () => {
    const { firestTime } = form

    const initialState = Object.assign({
        firestTime: firestTime.multiple ? firestTime.selectedValues : firestTime.selectedValues[0],
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
        yup.reach(FirstBuyingShema, 'firestTime').validate(data.firestTime).then(() => {
            setErrors(errors => ({ ...errors, firestTime: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, firestTime: err.errors }))
        })
    }, [data])

    const isValidForm = useMemo(() =>
        isEmptyArray(Object.values(errors).filter(arr => !isEmptyArray(arr)))
        , [errors]
    )
    /** */

    return (
        <div className="flex flex-col gap-8 items-center ">
            <div className=' max-w-5xl'>
                <div className=' flex flex-col items-center gap-8'>
                    <CardChoicesInput
                        label={firestTime.label}
                        brief={firestTime.brief}
                        multiple={firestTime.multiple}
                        isrequired={firestTime.isrequired}
                        choices={firestTime.choices}
                        defaultValue={initialState.firestTime}
                        onChange={(value) => setData({ ...data, firestTime: value })}
                        showErrors={showErrors}
                        errors={errors.firestTime}
                    />

                    <h1 className={`${data.firestTime === "first_time" ? "visible" : " invisible"} text-dark text-center max-w-sm font-semibold`}>
                        Congrats! Lucky for you, there are many programs and taxable programs!
                    </h1>

                </div>

                <NextPrevButtuns data={data} isValidForm={isValidForm} showTheErrors={showTheErrors} />
            </div>


        </div>
    )
}

const form = {
    firestTime: {
        label: "Is this your first time buying a home?",
        brief: "",
        multiple: false,
        isrequired: false,
        choices: [
            {
                key: "I am a first-time homebuyer.",
                value: "first_time", tooltip: "",
                brief: "",
                image: ""
            },
            {
                key: "I've owned before.",
                value: "not_first_time", tooltip: "",
                brief: "",
                image: ""
            },


        ],
        selectedValues: [],
        tooltip: "",
    },


}