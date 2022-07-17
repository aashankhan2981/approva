import { MenuItem, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useReducer } from 'react';
import { FormContext } from '../../../contexts';
import { getValidVariants } from '../../../engines/decisionEngine';
import {checkers} from '../../../engines/constants'
import { FilterEngine, RankingEngine } from '../../../engines/rankingEngine';

import { isEmptyArray } from '../../../helpers';

export const ShowResults = () => {

    const [filter, dispatch] = useReducer(reducer, { 
        refinance: false,
    })
    const { rootForm } = useContext(FormContext)
    const application = rootForm.application
    application.applicants = rootForm.applicants

    const results = getValidVariants(application, filter) 
    const filteredResults = FilterEngine(results,[])

    const rankedResults =filteredResults? RankingEngine(filteredResults,[]).rankedResults.map(result => result.variant):[]
    
    return (
        <div className=' py-16'>
            results
            {/**Filters */}
            <div className=' w-full flex gap-4 rounded-lg fixed top-0 mx-4 py-3 bg-white'>
                <TextField
                    className=' max-w-xs flex-grow'
                    id="outlined-select-currency"
                    select
                    label="Select Amortization"
                    value={filter.amortization || "ANY"}
                    onChange={(event) => dispatch({ type: "SET_AMORTIZATION", payload: { amortization: event.target.value } })}
                    helperText=""
                >
                    {amortizations.map((option) => (

                        <MenuItem key={option} value={option}>
                            {option!=="ANY" ? `${option}Year` : "ANY"}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    className=' max-w-xs flex-grow'
                    id="outlined-select-currency"
                    select
                    label="Select Term"
                    value={filter.term || "ANY"}
                    onChange={(event) => dispatch({ type: "SET_TERM", payload: { term: event.target.value } })}
                    helperText=""
                >
                    {terms.map((option) => (

                        <MenuItem key={option} value={option}>
                            {option!=="ANY" ? `${option}Year` : "ANY"}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    className=' max-w-xs flex-grow'
                    id="outlined-select-currency"
                    select
                    label="Select Rate Type"
                    value={filter.rate || "ANY"}
                    onChange={(event) => dispatch({ type: "SET_RATE", payload: { rate: event.target.value } })}
                    helperText=""
                >
                    {rates.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option!=="ANY"?`${option} rate`:"ANY"}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            {/** Decision Engin */}
            <div className=' space-y-1 w-full overflow-x-scroll text-sm p-4'>
                {
                    <div className=' flex gap-4 '>
                        <h1 className='p-2 w-48 flex-shrink-0 flex justify-center items-center bg-yellow-200 font-bold border border-gray-700'>Decision Engin</h1>

                        {results!= null && results.map((result, index) => (
                            <h1 key={index} className='p-2 w-48 gap-4 flex-shrink-0 flex flex-col justify-center items-center  font-bold border border-gray-700'>
                                <p>
                                    {result.lender.name}- {result.name}
                                </p>
                                <p>
                                    <span className=' bg-yellow-200'>{result.program.name} </span>
                                </p>
                            </h1>
                        ))
                        }
                    </div>
                }
                {



                    <div className='flex gap-4 w-full '>
                        <div className='w-48 flex-shrink-0 flex  flex-col'>

                            {
                                checkers.map((checker, index) => (
                                    <h2 className=' p-2 border' key={index} >{checker}</h2>
                                ))
                            }

                        </div>

                        {
                          results!=null &&  results.map((result, index) => (
                                <div key={index} className='w-48 flex-shrink-0  flex flex-col'>

                                    {result.results.map((item, index) => item.checkerValue ?
                                        (<h2 className=' p-2 border bg-green-200' key={index} >
                                            <span className='ml-4' > {item.inputValue || "-"}</span> : YES
                                        </h2>)
                                        :
                                        (<h2 className=' p-2 border bg-red-200' key={index}>
                                            <span className='ml-4' > {item.inputValue || "-"}</span> : NO
                                        </h2>)
                                    )}
                                    {
                                        isEmptyArray(result.results.filter(item => !item.checkerValue)) ?
                                            <h2 className=' p-2 border bg-green-500' key={index} >APPROVED</h2>
                                            :
                                            <h2 className=' p-2 border bg-red-500' key={index} >REJECTED</h2>
                                    }
                                </div>
                            ))
                        }

                    </div>

                }

            </div>
            {/** Ranking Engin */}
            <div className=' space-y-1 w-full overflow-x-scroll text-sm p-4'>
                {
                    <div className=' flex gap-4 '>
                        <h1 className='p-2 w-48 flex-shrink-0 flex justify-center items-center bg-yellow-200 font-bold border border-gray-700'>Ranking Engin</h1>

                        { rankedResults.map((result, index) => (
                            <h1 key={index} className='p-2 w-48 gap-4 flex-shrink-0 flex flex-col justify-center items-center  font-bold border border-gray-700'>
                                <p>
                                    {result.lender.name}- {result.name}
                                </p>
                                <p>
                                    <span className=' bg-yellow-200'>{result.program.name} </span>
                                </p>
                            </h1>
                        ))
                        }
                    </div>
                }
                {



                    <div className='flex gap-4 w-full '>
                        <div className='w-48 flex-shrink-0 flex  flex-col'>

                            {
                                checkers.map((checker, index) => (
                                    <h2 className=' p-2 border' key={index} >{checker}</h2>
                                ))
                            }
                            <h2 className=' p-2 border'>Fixed Rate</h2>
                            <h2 className=' p-2 border'>Fixed Monthly</h2>
                            <h2 className=' p-2 border'>Variable Rate</h2>
                            <h2 className=' p-2 border'>Variable Monthly</h2>
                        </div>

                        {
                            rankedResults.map((result, index) => (
                                <div key={index} className='w-48 flex-shrink-0  flex flex-col'>

                                    {result.results.map((item, index) => item.checkerValue ?
                                        (<h2 className='text-center p-2 border bg-green-200' key={index} >
                                            <span className='ml-4' > {item.inputValue || ""}</span> YES
                                        </h2>)
                                        :
                                        (<h2 className='text-center p-2 border bg-red-200' key={index}>
                                            <span className='ml-4' > {item.inputValue || ""}</span> NO
                                        </h2>)
                                    )}
                                    {result.outputData.fixedRateMonthlyPayment ?
                                        <>
                                            <h2 className='bg-green-200 p-2 border text-center'>
                                                {Math.round(result.outputData.fixedRateMonthlyPayment.intrestRate * 100) / 100}%
                                            </h2>
                                            <h2 className='bg-green-200 p-2 border text-center'>
                                                ${Math.round(result.outputData.fixedRateMonthlyPayment.value * 100) / 100}
                                            </h2>

                                        </>

                                        :
                                        <>
                                            <h2 className='bg-green-200 p-2 border text-center'>
                                                -
                                            </h2>
                                            <h2 className='bg-green-200 p-2 border text-center'>
                                                -
                                            </h2>
                                        </>


                                    }

                                    {result.outputData.variableRateMonthlyPayment ?
                                        <>
                                            <h2 className='bg-green-200 p-2 border text-center'>
                                                {Math.round(result.outputData.variableRateMonthlyPayment.intrestRate * 100) / 100}%
                                            </h2>
                                            <h2 className='bg-green-200 p-2 border text-center'>
                                                ${Math.round(result.outputData.variableRateMonthlyPayment.value * 100) / 100}
                                            </h2>
                                        </>
                                        :
                                        <>
                                            <h2 className='bg-green-200 p-2 border text-center'>
                                                -
                                            </h2>
                                            <h2 className='bg-green-200 p-2 border text-center'>
                                                -
                                            </h2>
                                        </>

                                    }
                                    {
                                        isEmptyArray(result.results.filter(item => !item.checkerValue)) ?
                                            <h2 className=' p-2 border bg-green-500' key={index} >APPROVED</h2>
                                            :
                                            <h2 className=' p-2 border bg-red-500' key={index} >REJECTED</h2>
                                    }
                                </div>
                            ))

                        }


                    </div>

                }

            </div>
        </div>
    )
}

function reducer(state, action) {
    const { type, payload } = action
    switch (type) {
        case "SET_AMORTIZATION":
            if (payload.amortization!="ANY")
                return { ...state, amortization: payload.amortization }
            else  {
                const {amortization, ...new_state} = state;
                return new_state
            }
            
        case "SET_TERM":
            if (payload.term!="ANY")
                return { ...state, term: payload.term }
            else {
                const {term, ...new_state} = state;
                return new_state
            }
            
        case "SET_RATE":
            if (payload.rate!="ANY")
                return { ...state, rate: payload.rate }
            else {
                const {rate, ...new_state} = state;
                return new_state
            }
           
        default:
            return state
    }
}

const amortizations = ["ANY", 10, 15, 20, 25, 30]
const terms = ["ANY", 1, 2, 3, 4, 5, 6, 7, 10]
const rates = ["ANY", "fixed", "variable"]

