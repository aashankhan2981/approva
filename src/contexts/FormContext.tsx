import axios from 'axios'
import React, { createContext, useReducer, useMemo, useEffect, useContext } from 'react'
import { AuthenticationContext } from '.'
import { FormInitialState } from '../constants'
import { isEmptyArray } from '../helpers'


type actionType = {
    type: "ATTACH_USER" | "SET_DATA" | "SET_SISSION_DATA" | "LOAD_FROM_LOCALSTORAGE";
    payload: any;
}
type formContextType = {
    rootForm: any,
    dispatchData: React.Dispatch<actionType>
}

export const FormContext: React.Context<formContextType> = createContext({ rootForm: FormInitialState, dispatchData: () => { } })

export const FormProvider = ({ children }) => {
    const user = useContext(AuthenticationContext)
    const [rootForm, dispatchData]: [any, React.Dispatch<actionType>] = useReducer(reducer, FormInitialState)

    const contextValue = useMemo(() => (
        { rootForm, dispatchData }
    ), [rootForm]);

    

    useEffect(() => {
        // save progress to local storage
        //localStorage.setItem("rootForm", JSON.stringify(rootForm))
        if (user && !rootForm.application.user) dispatchData({ type: "ATTACH_USER", payload: { user: user.uid } })

    }, [rootForm])

    return (
        <FormContext.Provider value={contextValue}>
            {children}
        </FormContext.Provider>
    )
}

const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case "SET_DATA":
            switch (payload.formName) {
                case "application":
                    return { ...state, application: Object.assign(state.application, payload.data) }
                case "applicant":
                    if (isEmptyArray(state.applicants)) {
                        return { ...state, applicants: [...state.applicants, payload.data] }
                    }
                    return {
                        ...state,
                        applicants: state.applicants.map((applicant, index) => {
                            if (index === 0) { // this 0 will be payload.index latter 
                                return { ...applicant, ...payload.data }
                            }
                            return applicant
                        })
                    }
            }
        case "ATTACH_USER":
            return { ...state, application: { ...state.application, user: payload.user } }
        case "SET_SISSION_DATA":
            return { ...state, current_app_id: payload.current_app_id }
        case "LOAD_FROM_LOCALSTORAGE":
            const data_str = localStorage.getItem("rootForm")
            if (data_str) return JSON.parse(data_str)
            else return FormInitialState

        default:
            throw new Error()

    }
}