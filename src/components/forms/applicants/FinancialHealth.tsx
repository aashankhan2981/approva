import { Button, IconButton, Tooltip } from '@mui/material'
import React, { useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { checkForErrors, isEmptyArray, FillObject } from '../../../helpers'
import { useFillForm } from '../../../hooks'
import { NextPrevButtuns, ChoiceInput, DateInput } from '../../inputs'
import * as yup from 'yup';
import { FormContext } from '../../../contexts'
import axios from 'axios'
import { LoadingScreen } from '../../util/LoadingScreen'
import { MessageOutlined } from '@mui/icons-material'


const FinancialHealthSchema = yup.object().shape({
    FICO: yup.number().required("Please select one option"),
    bunkrupcy: yup.string().required("Please select one option"),
});


export const FinancialHealth = ({ applicant_index = 0 }) => {
    const { FICO, bunkrupcy, dischardedDate } = form
    const { rootForm, dispatchData } = useContext(FormContext)
    const initialState = FillObject({
        FICO: FICO.multiple ? FICO.selectedValues : FICO.selectedValues[0],
        bunkrupcy: bunkrupcy.multiple ? bunkrupcy.selectedValues : bunkrupcy.selectedValues[0],
        dischardedDate: null,
        notDischarged: false,
    }, useFillForm())
    const [data, setData] = useState(initialState)


    const [loadingEquifax, setLoadingEquifax] = useState(true)
    useLayoutEffect(() => {

        if (!rootForm.application.checked) {
            setLoadingEquifax(false)
            return
        }
        const applicant = rootForm.applicants[applicant_index]
        if (!applicant) {
            setLoadingEquifax(false)
            return
        }
        const body = {
            firstname: applicant.firstName,//applicant.firstName,
            lastName: applicant.lastName,// applicant.lastName,
            birthday: applicant.birthday,//applicant.birthday,
            civicNumber: "",
            postalCode: "",
            streetName: applicant.currrentAdress.label.split(", ")[0],//applicant.currrentAdress.label.split(", ")[0],
            city: applicant.currrentAdress.label.split(", ")[1], //applicant.currrentAdress.label.split(", ")[1],
            province: applicant.currrentAdress.label.split(", ")[2].toLowerCase(),// applicant.currrentAdress.label.split(", ")[2].toLowerCase(),
        }
        axios.post(`http://137.184.172.15:3000/credit/info`,{data: body}).then(res => {
            const { status, data: apiData } = res.data
            if (status !== "success") return

            const debts = apiData.debts.filter(item => item.paymentTermAmount >= 0).map(item => (
                {
                    debtAmount: item.paymentTermAmount,
                    debtRate: item.paymentPeriod === "yearly" ? "annually" : item.paymentPeriod,
                    debtType: item.type,
                    bankName: item.bankName
                }
            ))
            const bunkrupcy = apiData.bankruptcy ? "yes" : "no"
            const dischardedDate = apiData.bankruptcy ? apiData.bankruptcy.date : null
            const FICO = apiData.creditScore || ""
            setData({ ...data, FICO, bunkrupcy, dischardedDate })
            dispatchData({
                type: "SET_DATA",
                payload: {
                    formName: "applicant",
                    data: {
                        debts,
                    },
                    index: applicant_index,
                }
            })
            setLoadingEquifax(false)

        }).catch(err => {
            //console.log(err);
            setLoadingEquifax(false)
        })



    }, [rootForm.application.checked])

    /** error handling */
    const [showErrors, setShowErrors] = useState(false)
    const showTheErrors = () => {
        setShowErrors(true)
    }
    /** check errors */
    const initialErrors: any = {}
    const [errors, setErrors] = useState(initialErrors)

    useEffect(() => {
        yup.reach(FinancialHealthSchema, 'FICO').validate(data.FICO).then(() => {
            setErrors(errors => ({ ...errors, FICO: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, FICO: err.errors }))
        })
        yup.reach(FinancialHealthSchema, 'bunkrupcy').validate(data.bunkrupcy).then(() => {
            setErrors(errors => ({ ...errors, bunkrupcy: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, bunkrupcy: err.errors }))
        })

    }, [data])

    const isValidForm = useMemo(() =>
        isEmptyArray(Object.values(errors).filter(error_arr => !isEmptyArray(error_arr)))
        , [errors]
    )
    /** */
    const getselectedFico = (ficoValue) => {
        if (ficoValue < 330) return 0
        if (ficoValue < 620) return 330
        if (ficoValue < 680) return 620
        if (ficoValue < 720) return 680
        if (ficoValue >= 720) return 720
        return ""
    }

    return (
        <div className="flex flex-col gap-9 w-full">
            <LoadingScreen isopen={loadingEquifax} />
            <div className='flex place-content-center'>
            <ChoiceInput
                label={FICO.label}
                multiple={FICO.multiple}
                isrequired={FICO.isrequired}
                choices={FICO.choices}
                tooltip={FICO.tooltip}
                defaultValue={getselectedFico(data.FICO)}
                onChange={(value) => setData({ ...data, FICO: value })}
                errors={errors.FICO}
                showErrors={showErrors}
            />
            <Tooltip title="Continue to the end, to see your exact credit score" placement="top">
            <IconButton>
                <MessageOutlined />
            </IconButton>  
            </Tooltip>
            </div>

            <ChoiceInput
                label={bunkrupcy.label}
                multiple={bunkrupcy.multiple}
                isrequired={bunkrupcy.isrequired}
                choices={bunkrupcy.choices}
                tooltip={bunkrupcy.tooltip}
                defaultValue={data.bunkrupcy}
                onChange={(value) => setData({ ...data, bunkrupcy: value })}
                errors={errors.bunkrupcy}
                showErrors={showErrors}
            />
            {
                <div className={`flex gap-5 justify-center items-end ${data.bunkrupcy === "yes" ? "visible" : "invisible"}`}>
                    <DateInput
                        label={dischardedDate.label}
                        classes={{label: 'flex items-center justify-center gap-2'}}
                        placeholder={dischardedDate.placeholder}
                        isrequired={dischardedDate.isrequired}
                        tooltip={dischardedDate.tooltip}
                        defaultValue={data.dischardedDate}
                        onChange={(value) => setData({ ...data, dischardedDate: value })}
                        errors={errors.dischardedDate}
                        showErrors={showErrors}
                    />
                    <Button
                        color={data.notDischarged ? "primary" : 'inherit'}
                        onClick={() => setData({ ...data, notDischarged: true })}
                        variant='contained'
                        sx={{ padding: 2 }}
                        disabled={data.dischardedDate == null ? false : true}
                    >
                        I am not yet discharged
                    </Button>
                </div>
            }
            <NextPrevButtuns data={data} isValidForm={isValidForm} showTheErrors={showTheErrors} />
        </div>
    )
}

const form = {

    FICO: {
        label: "Can you tell us your estimate Credit Score",
        multiple: false,
        isrequired: false,
        choices: [
            { key: "720+ Excellent", value: 720, tooltip: "" },
            { key: "680-720 Good", value: 680, tooltip: "" },
            { key: "620-680 Fair", value: 620, tooltip: "" },
            { key: "330-620 Poor", value: 330, tooltip: "" },
            { key: "Not sure", value: 0, tooltip: "" },
        ],
        selectedValues: [],
        tooltip: "Some indication how to get credit Score",
    },
    bunkrupcy: {
        label: "Have you filed for Bankruptcy or Consumer Proposal in the last 7 years?",
        multiple: false,
        isrequired: false,
        choices: [
            { key: "Yes", value: "yes", tooltip: "" },
            { key: "No", value: "no", tooltip: "" },
        ],
        selectedValues: [],
        tooltip: "bankruptcy definition...",
    },
    dischardedDate: {
        label: "When was your Date of Discharge?",
        isrequired: false,
        placeholder: "Discharge date",
        tooltip: "When was your Date of Discharge?",
        readOnly: false,
    },


}