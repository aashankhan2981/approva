import React from 'react'

type LabelProps={
    label:string;
    inputRequired:boolean;
    helptext?:string
}
export const Label:React.FC<LabelProps> = (props) => {
    const {label,inputRequired, helptext=""}=props
    return (
        <div className="text-dark flex items-center gap-1 font-bold text-basis">
            {label}
            {inputRequired && <span className="text-red-500">*</span>}
            <span className=' text-xs text-gray-400'>{helptext}</span>
        </div>
    )
}
