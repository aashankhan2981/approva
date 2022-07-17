import { MenuItem, TextField } from '@mui/material'
import React, { FC } from 'react'
import { InputErrorList } from '.'
import { checkForErrors, isEmptyArray, thereIsError } from '../../helpers'
import { InputProps } from '../@types'
import { InfoIcon } from '../icons'
import { InputToolTip } from './InputToolTip'
import { Label } from './Label'


export const SelectInput:FC<InputProps> = (props) => {
    const { multiple, label, isrequired, choices,errors, defaultValue,placeholder, tooltip, onChange,showErrors }=props
    const updateValue = (event) => {
        const val = event.target.value
        onChange(val);
    } 
    return (
        <div className="flex flex-col flex-grow gap-2">
            {/**First name field */}
            {label && <Label label={label} inputRequired={isrequired} />}
            <div className="flex w-full items-center  ">
                <TextField
                    sx={{width:"100%"}}
                    select
                    label={placeholder}
                    value={defaultValue}
                    onChange={updateValue}
                    error={ showErrors && !isEmptyArray(errors) ? true : false}
                    helperText={ showErrors && <InputErrorList errors={errors} />}
                >
                    {
                        choices.map((item, index) =>
                            (<MenuItem key={index} value={item.value} > {item.key} </MenuItem>))
                    }
                </TextField>

                {tooltip && <InputToolTip icon={<InfoIcon className="w-5 h-5 text-[#398ECE]" />} text={tooltip} />}
            </div>
            
        </div>
    )
}
