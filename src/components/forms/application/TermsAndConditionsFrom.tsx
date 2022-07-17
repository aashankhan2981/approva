import React, { useState } from 'react'
import Image from 'next/image'
import { CheckBoxInput, NextPrevButtuns } from '../../inputs'
import { useFillForm } from '../../../hooks'

import { CkeckedIcon } from '../../icons'
import { TextareaAutosize } from '@mui/material'

export const TermsAndConditionsFrom = () => {
    const { agree, disagree } = form
    const initialState = Object.assign(
        {
            checked: agree.checked,
            disagreeChecked: disagree.checked
        },
        useFillForm()
    )
    const [data, setData] = useState(initialState)

    return (
        <>
            <div className=" w-full   space-y-2 text-dark  overflow-y-hidden ">
                <h1 className=' flex justify-center text-lg font-bold text-dark'> Let’s Build Your Credit Profile</h1>
                <div className='border bg-white text-base  border-gray-300 space-y-4 py-2 px-4 max-h-96 overflow-y-auto'>
                    <p className=' font-bold'>
                        Your Credit Score and  Monthly debt payments are Essential to shop around different Lenders
                        to find you an Approval, the best rates, best promotional offers and a faster experience.
                    </p>
                    <div className=' flex items-center gap-4'>
                        <CkeckedIcon className="w-6 h-6 text-[#398ECE] border-2 border-white" />
                        <p className=' font-bold '>This is a soft inquiry, and will not impact your Credit Score </p>
                    </div>
                    <div className=' flex items-center gap-4'>
                        <CkeckedIcon className="w-6 h-6 text-[#398ECE] border-2 border-white" />
                        <p className=' font-bold '>Shop tailored Lender reccomendations based on your profile </p>
                    </div>
                    <p className=' font-bold'>
                        After reading our Terms and Conditions & Privacy Policy, select “Yes I agree to the Terms & Conditions” to complete the soft inquiry.
                    </p>
                    <div className='flex w-full justify-center'>
                        <div className='flex items-center h-24'>
                            <Image src={"/imgs/Equifax.svg"} width={288} height={36} alt="Equifax" />
                        </div>
                        <div>
                            <Image src={"/imgs/transunion.svg"} width={320} height={56} alt="transunion" />
                        </div>
                    </div>
                    <TextareaAutosize
                        className="indent-5 bg-white p-2  text-dark text-sm w-full text-justify"
                        readOnly
                        defaultValue="I/we warrant and confirm that the information given in the mortgage application form is true and correct and I/we understand that it is being used to determine my/our credit responsibility.You are authorized to obtain any information you may require for these purposes from other sources(including, for example, credit bureau) and each such source is hereby authorized to provide you with such information. I/we also understand that the information given in the mortgage application form as well as other information you obtain in relation to my credit history may be disclosed to potential mortgage lenders, financial intermediary and mortgage insurers, organizations providing technological or other support services required in relation to this application and any other parties with whom I/we propose to have a financial relationship.I/we agree to True North Mortgage Privacy Policy and Service Agreement. "
                    />
                       
                </div>
            </div>
           <div className={"m-auto"}>
                <CheckBoxInput
                    label={agree.label}
                    isrequired={agree.isrequired}
                    defaultValue={data.checked}
                    onChange={(value) => setData({ ...data, checked: value })}
                />
                <CheckBoxInput
                    label={disagree.label}
                    classes={{parent: 'flex items-center gap-4 mt-1'}}
                    isrequired={disagree.isrequired}
                    defaultValue={data.disagreeChecked}
                    onChange={(value) => setData({ ...data, disagreeChecked: value })}
                />
           </div>

            <NextPrevButtuns data={data}  />
        </>
    )
}

const form = {
    agree: {
        label: "Yes, I agree to the Terms & Conditions",
        type: "checkbox",
        checked: false,
        isrequired: false,
    },
    disagree: {
        label: "No thanks, I'll do it manually",
        type: "checkbox",
        checked: false,
        isrequired: false,
    },
   
}