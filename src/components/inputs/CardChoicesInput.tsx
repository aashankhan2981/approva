import React, { useState,FC } from 'react'
import { InputErrorList } from './InputErrorList'
import Image from 'next/image'
import { InputProps } from '../@types'

export const CardChoicesInput:FC<InputProps> = (props) => {
    const { label, brief, multiple, showErrors, choices, tooltip, defaultValue, onChange,errors } = props
    //defaultValue will be array of values if multiple is true or null or one value
    const [value, setValue] = useState(defaultValue || null)
    const updateValue = (val) => {
        if (multiple) {
            //if value exist remove it with filter else add it with spread operator
            const new_value = value.includes(val) ? value.filter(v => v != val) : [...value, val]
            setValue(new_value)
            onChange(new_value);
        }
        else {
            if (val != value) {
                setValue(val)
                onChange(val);

            }
        }
    }
    
    return (
        <div className='space-y-2 w-full text-dark'>
            <div className='flex flex-col items-center gap-5 '>
                <h1 className=' text-2xl font-bold text-[#000000] text-[36px]'>{label}</h1>
                <p className=' text-grey font-normal text-[16px]'>{brief}</p>
                {showErrors && <InputErrorList errors={errors} />}
                <div className='flex gap-8 flex-wrap md:flex-nowrap xl:flex-nowrap '>
                    {
                        choices.map((option, index) => (
                            <Option onClick={(val) => updateValue(option.value)} key={index} selected={multiple ? value.includes(option.value) : value === option.value} option={option} />
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

const Option = ({ selected, option, onClick }) => {
    
    return (
        <div
            className={`max-w-64   ${selected ? "border-2 border-[#398ECE] rounded" : ' '} ${option.image ? "" : "border border-gray-300"} p-4 hover:scale-105 flex flex-col gap-3 items-center justify-between flex-grow text-sm rounded-sm relative`}
            onClick={onClick}

        >
            <div className=" flex flex-col itmes-center">
                <div className="border flex justify-center items-center rounded-2xl">
                    {option.image && <Image src={option.image} height={200} width={200} alt="" />}
                </div>
                <div className={`text-center space-y-2 px-4 py-2  `}>
                    <h1 className=' text-lg font-normal'>{option.key}</h1>
                    <p className=' text-sm text-grey'>{option.brief}</p>
                </div>
            </div>

            {
                <div className={`w-5 h-5 flex rounded-full ${selected ? "#398ECE" : "#000000"} `} >
                    <div className={`w-4 h-4 m-auto border-2 ${selected ? "border-[#398ECE]":'#000000'} rounded-full ${selected ? "bg-[#398ECE]" : ""} `} >
                    </div>
                </div>
            }
        </div>
    )
}