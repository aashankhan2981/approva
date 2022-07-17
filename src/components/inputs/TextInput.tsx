import React, { useState, useEffect, useMemo } from 'react'
import { InputErrorList } from './InputErrorList'
import { checkForErrors, isEmptyArray, thereIsError } from '../../helpers'
import { InfoIcon } from '../icons'
import { InputToolTip } from './InputToolTip'
import { Label } from './Label'
import { Slider, TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import { InputProps } from '../@types'

type TextInputProps=InputProps & {
    max?:number;
    step?:number;
}
export const TextInput:React.FC<TextInputProps> = (props) => {
    const {children,errors, type,disabled=false, label, isrequired, defaultValue, placeholder, tooltip, readOnly, onChange,showErrors,max=0,step=1, classes = null} = props
 
    const updateValue = (event) => {
        const val = event.target.value
        if (val != defaultValue) {
            onChange(val);
        }
    } 
   
    return (
        <div className={(classes && classes.parent) ? classes.parent : "flex flex-col flex-grow gap-2 "}>
            {/**First name field */}
            <div className={(classes && classes.labelParent) ? classes.labelParent : 'flex items-center gap-1'}>
                <Label label={label} inputRequired={isrequired} />
                {tooltip && <InputToolTip text={tooltip} />}
            </div>


            <div className=" flex items-start w-full gap-2 ">
                <div className=' tooltip w-full relative text-dark'>
                    <div className='flex items-start w-full gap-3 '>
                        
                        <TextField className=" flex-grow" 
                            disabled={disabled}
                            inputProps=  {type==="number"?{ inputMode: 'numeric', pattern: '[0-9]*',readOnly:readOnly }:{readOnly:readOnly}}
                            type={type}
                            label={placeholder}
                            placeholder={type==="number"?'0.00':placeholder}
                            value={defaultValue?defaultValue:""}
                            onChange={updateValue}
                            variant="outlined"
                            error={ showErrors && !isEmptyArray(errors) ? true : false}
                            helperText={ showErrors && <InputErrorList errors={errors} />}

                            InputProps={type === "number" ? {
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            } : {}}
                        />
                        {children}
                    </div>

                    {type === "number" && !readOnly&&
                        <Slider
                            disabled={disabled}
                            size="medium"
                            value={parseFloat(defaultValue) || 0}
                            onChange={updateValue}
                            max={max}
                            step={step}
                            aria-label="Default"
                            valueLabelDisplay="auto" />
                    }


                </div>


            </div>


        </div>
    )
}
