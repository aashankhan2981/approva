import React, { useContext, useEffect } from 'react'
import { ApplicationStatusContext, FormContext } from '../contexts'
import { isEmptyArray, isEmptyObj } from '../helpers'

export const useFillForm = (index=0) => {
    const { appStatus } = useContext(ApplicationStatusContext)
    const { steps, currentStepIndex } = appStatus
    const { forms, activeFormIndex } = steps[currentStepIndex]
    const activeFormName = forms[activeFormIndex].name
    /** geting data from context*/
    const { rootForm } = useContext(FormContext)

    switch(activeFormName){
        
        case "application":
            return rootForm["application"]
        case 'applicant':
            if (isEmptyArray(rootForm["applicants"])) return{}
            return rootForm["applicants"][index]
        default:
            return {}

    }
    
    
    
}
