import { Button } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { FillObject } from '../../../helpers'
import { isEmptyArray } from '../../../helpers'
import { useFillForm } from '../../../hooks'
import { ChoiceInput, TextInput, SelectInput, NextPrevButtuns, DateInput } from '../../inputs'
import * as yup from 'yup';


export const IncomeDetailsForm = () => {
    const initialState = FillObject({ incomes: [] }, useFillForm())
    const [data, setData] = useState(initialState)

    const [inputNumber, setInputNumber] = useState(data.incomes.length || 1);
    const removeIncome = () => {
        setData(data => ({
            ...data, incomes: data.incomes.slice(0, -1)
        }))
        setInputNumber(number => number - 1)
    }
    const addIncome = () => {
        setInputNumber(inputNumber => inputNumber + 1)
    }
    const updateData = (new_data, index) => {
        const income = data.incomes[index]
        if (!income) setData({
            ...data, incomes: [...data.incomes, new_data]
        })
        else setData({
            ...data, incomes: data.incomes.map((item, i) => {
                if (index === i) return FillObject(item, new_data)
                return item
            })
        })
    }
    /** error handling  */
    const [showErrors, setShowErrors] = useState(false)
    const showTheErrors = () => {
        setShowErrors(true)
    }

    const initialErrors: Array<any> = []
    const [errors, setErrors] = useState(initialErrors)
    const reportErrors = (errors_count, index) => {
        setErrors([...errors.slice(0, index), errors_count, ...errors.slice(index + 1)])
    }


    const isValidForm = useMemo(() =>
        isEmptyArray(Object.values(errors).filter(count => count))
        , [errors]
    )



    return (
        <div className="flex flex-col gap-8 w-full">
            {Array.apply(null, { length: inputNumber }).map((item, index) => (
                <Income
                    data={data.incomes[index] || {}}
                    key={index}
                    index={index}
                    onChange={(naw_data, index) => updateData(naw_data, index)}
                    showErrors={showErrors}
                    reportErrors={reportErrors}
                />
            ))}
            <div className='flex gap-12 justify-center'>
                <Button onClick={() => addIncome()} >Add Income</Button>
                {inputNumber > 1 && <Button color='error' onClick={() => removeIncome()} >Cancel</Button>}
            </div>
            <NextPrevButtuns data={data} isValidForm={isValidForm} showTheErrors={showTheErrors} />
        </div>
    )
}




const IncomeShema = yup.object().shape({
    jobeTitle: yup.string().required("Please Enter your job title"),
    startingDate: yup.date().required("Starting date is required"),
    incomeType: yup.string().required("please select Income type"),
    incomeAmount: yup.number().required("please Select your province").min(2000, "income must be > $2000")
})

const Income = ({ data, index, onChange, showErrors, reportErrors }) => {
    const { jobeTitle, startingDate, incomeType, incomeAmount, incomeRate, } = form
    const initialState = FillObject({
        jobeTitle: "",
        startingDate: null,
        incomeType: incomeType.multiple ? incomeType.selectedValues : incomeType.selectedValues[0],
        incomeAmount: 0,
        incomeRate: incomeRate.selectedValue,
    }, data)
    const [inputData, setData] = useState(initialState)
    useEffect(() => {
        onChange(inputData, index)
    }, [inputData]);

    /** check errors */
    const initialErrors: any = {}
    const [errors, setErrors] = useState(initialErrors)

    useEffect(() => {
        yup.reach(IncomeShema, 'jobeTitle').validate(data.jobeTitle).then(() => {
            setErrors(errors => ({ ...errors, jobeTitle: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, jobeTitle: err.errors }))
        })
        yup.reach(IncomeShema, 'startingDate').validate(data.startingDate).then(() => {
            setErrors(errors => ({ ...errors, startingDate: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, startingDate: err.errors }))
        })
        yup.reach(IncomeShema, 'incomeType').validate(data.incomeType).then(() => {
            setErrors(errors => ({ ...errors, incomeType: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, incomeType: err.errors }))
        })
        yup.reach(IncomeShema, 'incomeAmount').validate(data.incomeAmount).then(() => {
            setErrors(errors => ({ ...errors, incomeAmount: [] }))
        }).catch(err => {
            setErrors(errors => ({ ...errors, incomeAmount: err.errors }))
        })
    }, [inputData])

    useEffect(() => {
        const count_errors = Object.values(errors).filter(error_arr => !isEmptyArray(error_arr))
        reportErrors(count_errors.length, index)
    }, [errors]);
    /** */
    return useMemo(() => (

        <div className=" relative flex flex-col gap-8 w-full p-2">
            <div className='flex gap-4 w-full items-center'>
                <div className=' flex-grow'>
                    <TextInput
                        type={jobeTitle.type}
                        label={jobeTitle.label}
                        classes={{labelParent: 'flex justify-center items-center gap-1'}}
                        placeholder={jobeTitle.placeholder}
                        isrequired={jobeTitle.isrequired}
                        tooltip={jobeTitle.tooltip}
                        defaultValue={initialState.jobeTitle}
                        onChange={(value) => setData({ ...inputData, jobeTitle: value })}
                        errors={errors.jobeTitle}
                        showErrors={showErrors}
                    />
                </div>

                <div>
                    <DateInput
                        label={startingDate.label}
                        classes={{label: 'flex justify-center items-center gap-1'}}
                        placeholder={startingDate.placeholder}
                        isrequired={startingDate.isrequired}
                        tooltip={startingDate.tooltip}
                        defaultValue={initialState.startingDate}
                        onChange={(value) => setData({ ...inputData, startingDate: value })}
                        errors={errors.startingDate}
                        showErrors={showErrors}
                    />
                </div>

            </div>
            {index === 0 ? <ChoiceInput
                label={incomeType.label}
                multiple={incomeType.multiple}
                isrequired={incomeType.isrequired}
                choices={incomeType.choices1}
                defaultValue={initialState.incomeType}
                onChange={(value) => setData({...inputData, incomeType: value})}
                errors={errors.incomeType}
                showErrors={showErrors}
            /> : <ChoiceInput
                label={incomeType.label}
                multiple={incomeType.multiple}
                isrequired={incomeType.isrequired}
                choices={incomeType.choices2}
                defaultValue={initialState.incomeType}
                onChange={(value) => setData({...inputData, incomeType: value})}
                errors={errors.incomeType}
                showErrors={showErrors}
            />}
            <div className='flex relative items-end '>
                <div className='w-3/4'>
                    <TextInput
                        type={incomeAmount.type}
                        label={incomeAmount.label}
                        classes={{labelParent: 'flex justify-center items-center gap-1'}}
                        placeholder={incomeAmount.placeholder}
                        isrequired={incomeAmount.isrequired}
                        tooltip={incomeAmount.tooltip}
                        max={incomeAmount.max(data.incomeRate)}
                        step={incomeAmount.step}
                        defaultValue={initialState.incomeAmount}
                        onChange={(value) => setData({ ...inputData, incomeAmount: value })}
                        errors={errors.incomeAmount}
                        showErrors={showErrors}
                    />
                </div>

                <div className=' absolute right-0 top-8  w-1/4 pl-[10px]'>
                    <SelectInput
                        multiple={incomeRate.multiple}
                        label={incomeRate.label}
                        choices={incomeRate.data}
                        isrequired={incomeRate.isrequired}
                        tooltip={incomeRate.tooltip}
                        defaultValue={initialState.incomeRate}
                        onChange={(value) => setData({ ...inputData, incomeRate: value })}
                        errors={errors.incomeRate}
                        showErrors={showErrors}
                    />
                </div>

            </div>
        </div>
    ), [inputData, errors, showErrors])
}



const form = {
    jobeTitle: {
        label: "What is your Job Title?",
        type: "text",
        isrequired: false,
        placeholder: "ex: Teacher, Nurse, Analyst, Manager",
        tooltip: "ex: Teacher, Nurse, Analyst, Manager",
        readOnly: false,
    },
    startingDate: {
        label: "Start date",
        isrequired: false,
        placeholder: "starting date",
        tooltip: "when did you start working",
        readOnly: false,
    },
    incomeType: {
        label: "Type of Income",
        multiple: false,
        isrequired: false,
        choices1: [
            { key: "Salaried", value: "salaried", tooltip: "" },
            { key: "Self Employed", value: "self_employed", tooltip: "" },
            { key: "Hourly", value: "hourly", tooltip: "" },
            { key: "Part Time", value: "part_time", tooltip: "" },
            { key: "Other", value: "other", tooltip: "" },
        ],
        choices2: [
            { key: "Investment Income", value: "Investment income", tooltip: "" },
            { key: "Rental Income", value: "Rental Income", tooltip: "" },
            { key: "Gig/Freelance Work", value: "Gig/Freelance Work", tooltip: "" },
            { key: "Part-Time Job", value: "Part-Time Job", tooltip: "" },
            { key: "Government Program", value: "Government Program", tooltip: "" },
            { key: "Pension/Disability", value: "Pension/Disability", tooltip: "" },
            { key: "Other", value: "other", tooltip: "" },
        ],
        selectedValues: [],
        tooltip: "your Income type",
    },
    incomeAmount: {
        label: "Income Amount",
        type: "number",
        isrequired: true,
        placeholder: "amount",
        tooltip: "",
        readOnly: false,
        max: (period) => {
            if (period === "annually") return 200000
            if (period === "monthly") return 20000
            return 5000
        },
        step: 100,
    },
    incomeRate: {
        label: "",
        multiple: false,
        isrequired: false,
        data: [
            { key: "Annually", value: "annually" },
            { key: "Monthly", value: "monthly" },
            { key: "Weekly", value: "weakly" },
        ],
        selectedValue: "monthly",
        tooltip: "",
    },


}