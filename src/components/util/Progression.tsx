import { Box, Button } from '@mui/material';
import React, { useContext,FC } from 'react'
import { ApplicationStatusContext } from '../../contexts'

export const Progression:FC<{extraStyle:string}> = ({extraStyle}) => {
  const { appStatus } = useContext(ApplicationStatusContext)
  const { steps, currentStepIndex } = appStatus;
  const Activestep = steps[currentStepIndex];
  const { forms, activeFormIndex } = Activestep
  const totalFormsNumber = Activestep.forms.length

  //this mean all process has completed
  if (currentStepIndex == steps.length-1)
    return (
      <div className={`bg-[#80B7E0] h-2 w-full relative my-6 rounded-sm ${extraStyle} `}>
        <Button sx={{ position:"absolute"}} className=" text-xs  top-full right-0"> Completed!</Button>
      </div>
    )
  return (
    <div className={` ${extraStyle} py-6`}>

      <div className="flex gap-x-1">
        {
          forms.map((form, index) =>
            <StepIndicator key={index}  stepDone={index < activeFormIndex} current={activeFormIndex} order={index} total={totalFormsNumber} />
          )
        }
      </div>
    </div>
  )
}

const StepIndicator = ({ stepDone, current, order, total }) => {
  if (stepDone)
    return (
      <div className={`bg-[#80B7E0] h-2 flex-grow relative rounded-sm  ${(current === order) ? "--animate-pulse" : ""} `}>
        <span className="text-[15px] text-grey absolute top-full left-0">  {current === order && `${order}/${total}`}</span>
      </div>
    )
  return (
    <div className={`h-2 flex-grow relative rounded-sm ${(current === order) ? "--animate-pulse bg-[#80B7E0]" : "bg-blue-100"} `}>
      <span className="text-[15px] text-grey absolute top-full left-0">  {current === order && `${order+1}/${total}`}</span>
    </div>)
}




