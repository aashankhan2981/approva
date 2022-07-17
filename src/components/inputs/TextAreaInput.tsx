import React,{FC} from 'react'
import { InputToolTip } from './InputToolTip'
import { Label } from './Label'
import { InfoIcon } from '../icons'
import { InputErrorList } from './InputErrorList'
import { InputProps } from '../@types'

type TextAreaProps=InputProps & {
    resize?:boolean;
    rows?:number
}
export const TextAreaInput:FC<TextAreaProps> = (props) => {
    const {label, isrequired, placeholder, tooltip,defaultValue,onChange,errors=[], readOnly=false,resize,rows }=props
    const updateValue = (event) => {
        event.preventDefault()
        const val = event.target.value
        if (val != defaultValue) {
            onChange(val);
        }
    }
    return (
        <div className={`flex flex-col w-full gap-2 `}>
            {/**First name field */}
            <div className='flex items-center justify-center gap-2'>
                <Label label={label} inputRequired={isrequired} />
                {tooltip && <InputToolTip icon = {<InfoIcon className="h-6 w-6 text-[#398ECE]" />} text={tooltip} />}
            </div>

            <div className="flex w-full gap-2 tooltip justify-center">
                <textarea  className={`focus:outline-none focus:border-[#398ECE] w-[750px] border rounded-xl border-gray-300 p-2 text-dark ${resize?"":"resize-none"}`} rows={rows}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    onChange={updateValue}
                    value={defaultValue}
                />
                <InputErrorList errors={errors}/>
            </div>
           
        </div>
    )
}
