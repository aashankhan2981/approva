import React, { useEffect, useMemo, useState } from 'react'
import { isEmptyArray } from '../../../helpers'
import { useFillForm } from '../../../hooks'
import { NextPrevButtuns, ChoiceInput } from '../../inputs'
import * as yup from 'yup';
import { FillObject } from '../../../helpers'

const citizenShipShema = yup.object().shape({
    sitizenStatus: yup.string().required("Please select your citizenShip"),
});


export const CitizenShipForm = () => {
    const { sitizenStatus, moritalStatus } = form

    const initialState = FillObject(
        {
            sitizenStatus: sitizenStatus.multiple ? sitizenStatus.selectedValues : sitizenStatus.selectedValues[0],
            moritalStatus: moritalStatus.multiple ? moritalStatus.selectedValues : moritalStatus.selectedValues[0],
        },
        useFillForm()
    )

    const [data, setData] = useState(initialState)

    /** error handling */
    const [showErrors, setShowErrors] = useState(false)
    const showTheErrors = () => {
        setShowErrors(true)
    }
    const initialErrors:any={}
    const [errors, setErrors] = useState(initialErrors)


    useEffect(() => {
        yup.reach(citizenShipShema, 'sitizenStatus').validate(data.sitizenStatus).then(()=>{
            setErrors(errors=>({...errors,sitizenStatus:[]}))
        }).catch(err=>{
            setErrors(errors=>({...errors,sitizenStatus:err.errors}))
        })

    }, [data])

    const isValidForm = useMemo(() =>
        isEmptyArray(Object.values(errors).filter(error_arr => !isEmptyArray(error_arr)))
        , [errors]
    )
    /** */

    return (
        <div className="flex flex-col gap-8 w-full">

            <ChoiceInput
                label={sitizenStatus.label}
                multiple={sitizenStatus.multiple}
                isrequired={sitizenStatus.isrequired}
                choices={sitizenStatus.choices}
                tooltip={sitizenStatus.tooltip}
                defaultValue={data.sitizenStatus}
                onChange={(value) => setData({ ...data, sitizenStatus: value })}
                errors={errors.sitizenStatus}
                showErrors={showErrors}
                cols={2}

            />

            <ChoiceInput
                label={moritalStatus.label}
                multiple={moritalStatus.multiple}
                isrequired={moritalStatus.isrequired}
                choices={moritalStatus.choices}
                tooltip={moritalStatus.tooltip}
                defaultValue={data.moritalStatus}
                onChange={(value) => setData({ ...data, moritalStatus: value })}
                errors={errors.moritalStatus}
                showErrors={showErrors}
                cols={2}
            />
            <NextPrevButtuns data={data} showTheErrors={showTheErrors} isValidForm={isValidForm} />
        </div>
    )
}

const form = {

    sitizenStatus: {
        label: "What is your citizenship status?",
        multiple: false,
        isrequired: false,
        choices: [
            { key: "Canadian Citizen", value: "canadien", tooltip: "" },
            { key: "Permanent Resident", value: "parmanent", tooltip: "" },
            { key: "Work Permit", value: "work_permit", tooltip: "" },
            { key: "Non Resident", value: "not_resident", tooltip: "" },
        ],
        selectedValues: [],
        tooltip: "select your current citizenship status",
    },
    moritalStatus: {
        label: "What is your marital status?",
        multiple: false,
        isrequired: false,
        choices: [
            { key: "Single", value: "single", tooltip: "" },
            { key: "Married / Engaged", value: "married", tooltip: "" },
            { key: "Divorced / Seperated", value: "divorced", tooltip: "" },
            { key: "Common-Law", value: "common_low", tooltip: "" },
        ],
        selectedValues: [],
        tooltip: "select your marital status",
    },

}