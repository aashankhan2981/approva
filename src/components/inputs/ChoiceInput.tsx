import React, { FC } from 'react'
import { InputToolTip } from './InputToolTip'
import { InfoIcon, CkeckedIcon } from '../icons'
import { Label } from './Label'
import { ArrayToMatrix, checkForErrors, isEmptyArray } from '../../helpers'
import { InputErrorList } from './InputErrorList'
import { Button } from '@mui/material'
import { InputProps, selectOptionType } from '../@types'

export const ChoiceInput: FC<InputProps> = (props) => {
    const { cols, label, multiple, isrequired, choices, tooltip, defaultValue, errors, showErrors, onChange } = props
    //defaultValue will be array of values if multiple is true or null or one value


    const updateValue = (val) => {
        if (multiple) {
            //if value exist remove it with filter else add it with spread operator
            const new_value = defaultValue.includes(val) ? defaultValue.filter(v => v != val) : [...defaultValue, val]
            onChange(new_value);
        }
        else {
            if (val != defaultValue) {
                onChange(val);
            }
        }
    }
    const m = cols || choices.length
    const matrix = ArrayToMatrix(choices, m)

    return (
        <div className='space-y-2'>
            <div className='flex flex-col gap-5'>
                <div className=' flex items-center justify-center gap-2'>
                    <Label label={label} inputRequired={isrequired} />
                    {tooltip && <InputToolTip text={tooltip} icon={<InfoIcon className={`w-4 h-4 text-[#398ECE]  `} />} />}

                </div>
                <div>
                    {
                        matrix.map((row, key) => (
                            <div className='flex  flex-wrap m-auto w-[750px]' key={key}>
                                {
                                    row.map((option, index) => (
                                        <Option ignore_basis={choices.length === row.length} cols={row.length} onClick={(val) => updateValue(option.value)} key={index} selected={multiple ? defaultValue.includes(option.value) : defaultValue === option.value} option={option} />
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            {showErrors && <InputErrorList errors={errors} />}

        </div>
    )
}

export type InputOptionType = {
    selected: boolean;
    option: selectOptionType;
    onClick: (val:any) => void
    cols,
    ignore_basis
}

const Option:FC<InputOptionType> = (props) => {
    const { selected, option, onClick, cols, ignore_basis }=props
    return (
        <div className={`p-2 flex-grow ${!ignore_basis && `basis-1/${cols}`}`}>
            <Button
                variant={`${selected ? "contained" : "outlined"}`} sx={{ paddingX: 1, paddingY: 3, }}
                onClick={onClick} className={` w-full h-full hover:scale-105  flex-grow text-sm rounded-sm relative`}
            >
                {option.key}
                {
                    option.tooltip &&
                    <div className="absolute  -top-1 -right-1 lg:top-1 lg:right-1 cursor-pointer">
                        <InputToolTip text={option.tooltip} icon={<InfoIcon className={`w-4 h-4 ${selected ? "text-white" : "text-[#398ECE]"}  `} />} />
                    </div>
                }
                {
                    selected &&
                    <div className="absolute rounded-full -bottom-1 -right-1 border-1 bg-white border-white cursor-pointer">
                        <CkeckedIcon className={`w-5 lg:w-8 h-5 lg:h-8 text-[#398ECE]`} />
                    </div>
                }
            </Button>
        </div>

    )
}