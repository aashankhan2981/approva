import React, { useContext } from 'react'
import { ApplicationStatusContext } from '../../../contexts'
import { CkeckedIcon } from '../../icons'
export const Step = (props) => {
    const { index, isDone = false, active = false, icon, title, brief, isLastStep } = props
    const { appStatus, dispatch } = useContext(ApplicationStatusContext)

    return (
        <div className={'flex lg:h-12 h-auto flex-row gap-5 items-center w-1/4 justify-center'}
             onClick={() => dispatch({ type: "GO_TO", payload: { index: index } })}>
            <div className={`gap-1 lg:gap-4 cursor-pointer ${!isLastStep ? "flex-grow lg:flex-grow-0" : "flex-grow-0"} `}>
                <div className="relative flex-grow flex justify-between items-start gap-8 z-40">
                    <div className="w-full">
                        <h2 className="text-gray-800 text-[14px] font-medium justify-center w-full hidden lg:flex">{title}</h2>
                        <p className="text-grey text-sm font-semibold opacity-50 hidden justify-center lg:flex">{brief}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
