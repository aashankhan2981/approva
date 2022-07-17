import React, {useContext} from 'react'
import {ApplicationStatusContext} from '../../../contexts'
import {CkeckedIcon} from '../../icons'

export const StepIcon = (props) => {
    const {isDone = false, active = false, icon, isLastStep, isFirstStep, index, forms, totalFormsNumber, activeFormIndex} = props
    const {appStatus, dispatch} = useContext(ApplicationStatusContext)

    const StepIndicator = ({stepDone, current, order, total}) => {
        let width = 180 / total;

        if (stepDone)
            return (
                <div className={`bg-[#80B7E0] h-[3px] rounded-sm ${(current === order) ? "--animate-pulse" : ""} `}
                     style={{width: width + "px"}}>
                </div>
            )
        return (
            <div className={`h-[3px] rounded-sm ${(current === order) ? "--animate-pulse bg-[#80B7E0]" : "bg-white"} `}
                 style={{width: width + "px"}}>
            </div>)
    }

    return (
        <div className={'flex lg:h-12 h-auto flex-row gap-5 items-center w-1/4 justify-center'}
             onClick={() => dispatch({type: "GO_TO", payload: {index: index}})}>
            <div className={` relative h-[46px] border-4 lg:w-[46px] flex-shrink-0 items-center flex rounded-full 
                        ${isDone ? 'border-[#398ECE]' : ''} 
                        ${active ? "animate-pulse border-[#398ECE]" : ""}
                        `}
            >
                {icon}
                {
                    isDone && !active &&
                    <div className=' absolute lg:hidden -top-3 -right-3 z-50'>
                        <CkeckedIcon className="h-5 w-5 m-auto text-[#398ECE]"/>
                    </div>
                }
            </div>
            {!isLastStep && active &&
            <div className="relative">
                <div className='flex absolute w-[180px]'>
                    {
                        forms.map((form, index) =>
                            <StepIndicator key={index} stepDone={index < activeFormIndex} current={activeFormIndex}
                                           order={index} total={totalFormsNumber}/>
                        )
                    }
                </div>
            </div>}
            {!isLastStep && !active && !isDone &&
            <div className="relative">
                <div className='flex absolute w-[180px]'>
                    <div className={`w-[180px] lg:h-[3px] ${isDone ? " bg-[#398ECE]" : "bg-white"}`}/>
                </div>
            </div>
            }
            {!isLastStep && !active && isDone &&
            <div className="relative">
                <div className='flex absolute w-[180px]'>
                    <div className={`w-[180px] bg-[#80B7E0] flex-grow h-[3px] relative rounded-sm`}/>
                </div>
            </div>
            }
        </div>
    )
}
