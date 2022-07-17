import { LoadingButton } from '@mui/lab'
import { Button } from '@mui/material'
import React, { useContext, useState,FC } from 'react'
import { ApplicationStatusContext, FormContext } from '../../contexts'
import { delay } from '../../helpers'

type NextPrevHandlerProps={
    data:any;
    isValidForm?:boolean;
    showTheErrors?:()=>void;
}
export const NextPrevButtuns:FC<NextPrevHandlerProps> = (props) => {
    const { data, isValidForm=true, showTheErrors=()=>{} }=props
    const [loading, setLoading] = useState(false);
    const { dispatchData } = useContext(FormContext)
    const { appStatus, dispatch } = useContext(ApplicationStatusContext)
    const { steps, currentStepIndex } = appStatus
    const { forms, activeFormIndex } = steps[currentStepIndex]


    /** */
    const goNext = async () => {
        if (isValidForm) {
            setLoading(true)
            await delay(500)
            dispatchData(
                {
                    type: "SET_DATA",
                    payload: {
                        stepName: steps[currentStepIndex].name,
                        formName: forms[activeFormIndex].name,
                        data: data
                    }
                }
            )
            setLoading(false)
            dispatch({ type: "GO_NEXT" })
        }
        else {
            typeof(showTheErrors)!=="undefined" &&  showTheErrors()
        }
    }
    const goBack = () => {
        dispatch({ type: "GO_BACK" })
    }

    //if (currentStepIndex === steps.length - 1) return <></>

    return (
        <div className="flex justify-between gap-12 w-full mt-6">
            <Button  variant="text" size='large' className={`${currentStepIndex===0?"invisible":"visible"} border border-gray-400 py-2 lg:py-6 text-lg text-[#398ECE] box-border font-bold`}
                onClick={() => goBack()}>
                Back
            </Button>
            <LoadingButton
                sx={{paddingX:5,textTransform:"none", background: '#1D72E8'}}
                variant="contained" size='large'
                className={`border-2 text-gray-100 text-[16px] font-bold py-2 lg:py-6, rounded-3xl  `}
                onClick={() => goNext()} 
                loading={loading}
            >
                {activeFormIndex != forms.length - 1 ? "Next" : "Next"}
            </LoadingButton>
        </div>
    )
}
