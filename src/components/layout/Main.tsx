import React, { useContext } from 'react'
import { NextPrevButtuns } from '../inputs'
import { ContactUsButton } from '../inputs'
import { ApplicationStatusContext } from '../../contexts'
import { Card, Collapse, Grow } from '@mui/material'


export const Main = () => {
    const { appStatus } = useContext(ApplicationStatusContext)
    const { steps, currentStepIndex } = appStatus
    const currentStep = steps[currentStepIndex]
    const { forms, activeFormIndex } = currentStep
    
    
    const activeFrom = forms.filter((form, index) => {
        return (activeFormIndex === index)
    }).pop()
    
    

    const notIntheLastStep = () => (currentStepIndex < steps.length - 1)
    return (
            <Card 
            variant="outlined" 
            className={`
            flex flex-col p-4  w-full h-auto
            ${ currentStep.introduction?"justify-center shadow-xl ":"shadow-xl"}  
            ${notIntheLastStep() ? "lg:p-8" : "lg:p-0"} 
            `}
            >
                {activeFrom.component}
                {/* <ContactUsButton /> */}
            </Card>
        



    )
}
