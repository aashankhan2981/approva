import { Button } from '@mui/material'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { FormContext } from '../../../contexts'
import { FillObject } from '../../../helpers'
import { useFillForm } from '../../../hooks'
import { ChoiceInput, TextInput, SelectInput, NextPrevButtuns } from '../../inputs'



export const DebtsForm = ({applicant_index=0}) => {
    const initialState = FillObject({ debts: [] }, useFillForm())
    const [data, setData] = useState(initialState)
    const [inputNumber, setInputNumber] = useState(data.debts.length || 1);
    const removeDebt = () => {
        setInputNumber(number => number - 1)
        setData(data => ({
            ...data, debts: data.debts.slice(0, -1)
        }))
    }

    const updateData = (new_data, index) => {
        const debt = data.debts[index]
        if (!debt) setData({
            ...data, debts: [...data.debts, new_data]
        })
        else setData({
            ...data, debts: data.debts.map((item, i) => {
                if (index === i) return Object.assign(item, new_data)
                return item
            })
        })
    }
    const [showErrors, setShowErrors] = useState(false)
    const showTheErrors = () => {
        setShowErrors(true)
    }

    return (
        <div className="flex flex-col gap-8 w-full">
            {Array.apply(null, { length: inputNumber }).map((item, index) => (
                <Debt data={data.debts[index] || {}} key={index} index={index} onChange={(naw_data, index) => updateData(naw_data, index)} />
            ))}
            <div className='flex gap-12 justify-center'>
                <Button onClick={() => setInputNumber(inputNumber + 1)} >Add Loan</Button>
                {inputNumber >= 1 && <Button color='error' onClick={() => removeDebt()} >Cancel</Button>}
            </div>
            <NextPrevButtuns data={data} isValidForm={true} showTheErrors={showTheErrors} />
        </div>
    )
}
const Debt = ({ data, index, onChange }) => {
    const { debtType, debtAmount, debtRate, } = form
    const initialState = FillObject({
        debtType: debtType.multiple ? debtType.selectedValues : debtType.selectedValues[0],
        debtAmount: 0,
        debtRate: debtRate.selectedValue,
    }, data)
    const [inputData, setData] = useState(initialState)

    useEffect(() => {
        onChange(inputData, index)
    }, [inputData]);


    return useMemo(() => (
        <div className="flex flex-col gap-8 w-full">
            <ChoiceInput
                label={debtType.label}
                multiple={debtType.multiple}
                isrequired={debtType.isrequired}
                choices={debtType.choices}
                defaultValue={inputData.debtType}
                onChange={(value) => setData({ ...inputData, debtType: value })}
            />
            <div className='flex relative items-end '>
                <div className='w-3/4'>
                    <TextInput
                        type={debtAmount.type}
                        label={data.bankName || debtAmount.label}
                        classes={{labelParent: 'flex justify-center items-center gap-1'}}
                        placeholder={debtAmount.placeholder}
                        isrequired={debtAmount.isrequired}
                        tooltip={debtAmount.tooltip}
                        max={debtAmount.max(data.debtRate)}
                        step={debtAmount.step}
                        defaultValue={inputData.debtAmount}
                        onChange={(value) => setData({ ...inputData, debtAmount: value })}
                    />
                </div>

                <div className=' absolute right-0 top-8  w-1/4 pl-[10px]'>
                    <SelectInput
                        multiple={debtRate.multiple}
                        label={debtRate.label}
                        choices={debtRate.data}
                        isrequired={debtRate.isrequired}
                        tooltip={debtRate.tooltip}
                        defaultValue={inputData.debtRate}
                        onChange={(value) => setData({ ...inputData, debtRate: value })}
                    />
                </div>

            </div>
        </div>
    ), [inputData])
}

const form = {

    debtType: {
        label: "Tell us about some of your loan payments",
        multiple: false,
        isrequired: false,
        choices: [
            { key: "School Loan", value: "school_loan", tooltip: "" },
            { key: "Car Loan", value: "car_loan", tooltip: "" },
            { key: "Credit Card Payment", value: "credit_card_loan", tooltip: "" },
            { key: "Personal Loans", value: "personal_loan", tooltip: "" },
            { key: "Revolving", value: "Revolving", tooltip: "" },
            { key: "Installment", value: "Installment", tooltip: "" },
            { key: "Other", value: "other", tooltip: "" },
        ],
        selectedValues: [],
        tooltip: "What kind of loan you have",
    },
    debtAmount: {
        label: "Loan Payment",
        type: "number",
        isrequired: true,
        placeholder: "amount",
        tooltip: "",
        readOnly: false,
        max: (period) => {
            if (period === "annually") return 10000
            if (period === "monthly") return 2000
            return 500
        },
        step: 100,
    },
    debtRate: {
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