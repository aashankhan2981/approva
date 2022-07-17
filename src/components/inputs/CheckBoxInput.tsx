import { Checkbox } from '@mui/material'
import React, { FC } from 'react'
import { InputProps } from '../@types'
import { Label } from './Label'

export const CheckBoxInput:FC<InputProps> = ({ label, isrequired, defaultValue, onChange, classes }) => {
    
    const updateValue = (event) => {
        const ckecked = event.target.checked
        onChange(ckecked);
    }

    return (
        <div className={classes && classes.parent ? classes.parent : 'flex items-center gap-4 mt-4'}>
            
            <Checkbox
                checked={defaultValue}
                onChange={updateValue}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <Label label={label} inputRequired={isrequired} />
        </div>

    )
}
