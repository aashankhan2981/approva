import React, { createContext, useEffect, useMemo, useReducer } from 'react'
import { applicationInitialState } from '../constants'

type actionType={
    type:"GO_TO"|"GO_NEXT"|"GO_BACK"|"LOAD_FROM_LOCALSTORAGE"|"CLEAR_LOCALSTORAGE"
    payload?:any
}
type uiContextType={
    appStatus:any,
    dispatch:React.Dispatch<actionType>
}


export const ApplicationStatusContext:React.Context<uiContextType> = createContext({appStatus:applicationInitialState(),dispatch:()=>{}})
export const ApplicationStatusProvider = ({ children }) => {
    const [appStatus, dispatch]:[any,React.Dispatch<actionType>] = useReducer(reducer, applicationInitialState())

    const contextValue = useMemo(() => (
        { appStatus, dispatch }
    ), [appStatus]);

    useEffect(() => {
       //dispatch({ type: "LOAD_FROM_LOCALSTORAGE" })
    }, [])
    useEffect(() => {
       localStorage.setItem("currentStepIndex", String(appStatus.currentStepIndex))
        appStatus.steps.forEach((step,index) => {
            localStorage.setItem(step.title, String(step.activeFormIndex))
            localStorage.setItem(`${step.title}_isDone`, String(step.isDone))
        })
    }, [appStatus])

    return (
        <ApplicationStatusContext.Provider value={contextValue}>
            {children}
        </ApplicationStatusContext.Provider>
    )
}

function reducer(state, action) {
    const { steps, currentStepIndex } = state
    const activeStep = steps[currentStepIndex]
    const { forms, activeFormIndex } = activeStep
    switch (action.type) {

        case "GO_TO":
            if (steps[action.payload.index].isDone)
                return {
                    ...state,
                    currentStepIndex: action.payload.index,
                    steps: steps.map((step, index) => {
                        if (index === action.payload.index)
                            return { ...step, activeFormIndex: 0  }
                        return step
                    })
                }
            return state

        case "GO_NEXT":
            if (activeFormIndex < forms.length - 1) {
                // select the active step and go to next form inside this step
                return {
                    ...state,
                    steps: steps.map((step, index) => {
                        if (index === currentStepIndex)
                            return { ...step, activeFormIndex: activeFormIndex + 1 }
                        return step
                    })
                }
            }
            // if no more steps do nothing
            if (currentStepIndex >= steps.length) return state
            
            return {
                ...state,
                currentStepIndex: currentStepIndex < steps.length - 1 ? currentStepIndex + 1 : currentStepIndex,
                steps: steps.map((step, index) => {
                    if (index === currentStepIndex)
                        return { ...step, isDone: true }
                    return step
                })
            }

        case "GO_BACK":
            if (activeFormIndex > 0)
                return {
                    ...state,
                    steps: steps.map((step, index) => {
                        if (index === currentStepIndex)
                            return { ...step, activeFormIndex: activeFormIndex - 1 }
                        return step
                    })
                }

            if (currentStepIndex === 0) return state
            return { ...state, currentStepIndex: currentStepIndex - 1 }

        case "LOAD_FROM_LOCALSTORAGE":

            return {
                ...state,
                currentStepIndex: parseInt(localStorage.getItem("currentStepIndex")) || 0,
                steps: steps.map(
                    (step) => {
                        return {
                            ...step,
                            activeFormIndex: parseInt(localStorage.getItem(step.title)) || 0,
                            isDone: localStorage.getItem(`${step.title}_isDone`) === "true" ? true : false
                        }
                    }
                )
            }
        case "CLEAR_LOCALSTORAGE":
            localStorage.clear()
            return state;

        default:
            throw new Error()
    }
}
