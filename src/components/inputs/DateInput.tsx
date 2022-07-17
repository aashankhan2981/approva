import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material'
import moment from 'moment';
import React, { useState,FC } from 'react'
import { InputErrorList } from '.';
import {  isEmptyArray } from '../../helpers'
import { InputProps } from '../@types';
import { InfoIcon } from '../icons'
import { InputToolTip } from './InputToolTip'
import { Label } from './Label'

export const DateInput:FC<InputProps> = (props) => {
    const { label, isrequired, defaultValue, placeholder, tooltip, onChange, showErrors, errors,views=['year', 'month'], classes }=props
    
    const updateValue = (val) => {
        onChange(moment(val).format(views===['year', 'month']?"YYYY-MM":"YYYY-MM-DD"));
    }
    return (
        <div className="flex flex-col gap-2 w-full">
            {/**First name field */}
            <div className={classes && classes.label ? classes.label : 'flex items-center gap-2'} >
                {label && <Label label={label} inputRequired={isrequired} />}
                {tooltip && <InputToolTip icon={<InfoIcon className="w-5 h-5 text-[#398ECE]" />} text={tooltip} />}
            </div>

            <div className={classes && classes.dateInput ? classes.dateInput : "flex w-full items-center  "}>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        views={views}
                        label={placeholder}
                        value={defaultValue}
                        onChange={(val) => updateValue( val )}
                        InputProps={{
                            style:{
                                borderRadius:12
                            }
                        }}
                        renderInput={(params) =>
                            <TextField {...params}
                                fullWidth
                                error={showErrors && !isEmptyArray(errors) ? true : false}
                                helperText={showErrors && <InputErrorList errors={errors} />}
                            />
                        }
                    />
                </LocalizationProvider>
            </div>
            
        </div>
    )
}
