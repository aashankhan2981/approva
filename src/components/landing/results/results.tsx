import React, { Dispatch, useReducer } from 'react';
import { ScoreSectionNew } from './ScoreSectionNew';
import { ResultHeaderSection } from './ResultHeaderSection';
import { MatchingSectionNew } from './MatchingSectionNew';
import { useCheckApplication } from '../../../hooks';
import { rankingAttributeType } from '../../../engines/programs/types';


export const Results = ({ id }) => {

    const [filter, dispatch] = useReducer(reducer, {
        start: 0,
        refinance: false,
        attributes: ""
    })

    const { data, loading, error } = useCheckApplication(id, filter)


    if (error) return (
        <div className=' fixed w-full h-full flex'>7
            <h1 className=' m-auto text-red-500 text-xl '>{error.message}</h1>
        </div>
    )

    return (
        <div className='flex w-full flex-col bg-white'>
            <ResultHeaderSection />
            <ScoreSectionNew data={data ? data.metrics : {}} />
            <div className='px-4  space-y-12 pb-8 matchWrapper'>
                {/*<FilterSection />*/}
                {/*
                    <MatchingSection
                        data={data}
                        dispatch={dispatch}
                        filter={filter}

                        loading={loading}
                    />
                }*/}
                {
                    <MatchingSectionNew data={data}
                        dispatch={dispatch}
                        filter={filter}
                        loading={loading} />
                }
            </div>
        </div>
    )
};

type filterActionType = {
    type: "SET_AMORTIZATION" | "SET_TERM" | "SET_RATE" | "SET_RATE" | "PAGINATE" | "ADD_ATTRIBUTE" | "REMOVE_ATTRIBUTE",
    payload: any
}

function reducer(state, action: filterActionType) {
    const { type, payload } = action
    switch (type) {
        case "SET_AMORTIZATION":
            if (payload.amortization != "ANY")
                return { ...state, start: 0, amortization: payload.amortization }
            else {
                const { amortization, ...new_state } = state;
                return { ...new_state, start: 0 }
            }

        case "SET_TERM":
            if (payload.term != "ANY")
                return { ...state, start: 0, term: payload.term }
            else {
                const { term, ...new_state } = state;
                return { ...new_state, start: 0 }
            }

        case "SET_RATE":
            if (payload.rate != "ANY")
                return { ...state, start: 0, rate: payload.rate }
            else {
                const { rate, ...new_state } = state;
                return { ...new_state, start: 0 }
            }
        case "PAGINATE":
            return { ...state, start: payload.start }

        case "ADD_ATTRIBUTE":
          
            return { ...state, attributes: state.attributes+payload.value+","}

        case "REMOVE_ATTRIBUTE":
            if(state.attributes.includes(payload.value))
            return { ...state, attributes: state.attributes.split(',').filter(item=>(item!=payload.value)).toString()}
        default:
            return state
    }
}




