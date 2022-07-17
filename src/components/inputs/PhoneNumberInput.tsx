import React from 'react'
import { InputErrorList } from './InputErrorList'
import { isEmptyArray } from '../../helpers'
import { InputToolTip } from './InputToolTip'
import { Label } from './Label'

import PhoneInput from 'react-phone-input-2'
import { InputProps } from '../@types'

export const PhoneNumberInput:React.FC<InputProps> = (props) => {
    const { children, errors, label, isrequired, defaultValue, placeholder, tooltip, readOnly, onChange, showErrors, classes } = props

    const updateValue = (phone) => {
        
        if (phone != defaultValue) {
            onChange(phone);
        }
    } 

    return (
        <div className="flex flex-col flex-grow gap-2  w-full">
            {/**First name field */}
            <div className={(classes && classes.labelParent) ? classes.labelParent : 'flex items-center gap-1'}>
                <Label label={label} inputRequired={isrequired} />
                {tooltip && <InputToolTip text={tooltip} />}
            </div>

            <div className=" flex items-start w-full gap-2 ">
                <div className=' tooltip w-full relative text-dark'>
                    <div className='flex items-start w-full gap-3 '>

                        <PhoneInput
                            country={'ca'}
                            onlyCountries={['ca','dz']}
                            value={defaultValue}
                            placeholder={placeholder}
                            onChange={(phone)=>onChange(phone)}
                            inputStyle={{ padding:"15px 14px 15px 58px", width:"100%",flexGrow:"1"}}
                            countryCodeEditable={false}
                        />
                        {children}
                    </div>
                    {showErrors && <InputErrorList errors={errors} />}
                </div>


            </div>


        </div>
    )
}
