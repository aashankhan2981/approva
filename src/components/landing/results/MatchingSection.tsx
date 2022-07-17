import React, { useMemo } from 'react'
import { Match } from './Match'
import { TermFilter } from './filters/TermFilter'
import { AmortizationFilter } from './filters/AmortizationFilter'
import { PurposeFilter } from './filters/PurposeFilter'
import { isEmptyArray } from '../../../helpers'
import { Loading, Pagination } from '../../util'
import { RateFilter } from './filters/RateFilter'



export const MatchingSection = ({ data, dispatch, filter, loading }) => {
    const { results, count,pageSize }:any = data?data:{}
    
    return  (
        <section className='relative space-y-8 min-h-150 text-dark'>
            <h1 className=' text-center text-sm lg:text-lg capitalize'>
                BASED ON YOUR SELECTION ABOVE
                THERE ARE 5 LENDING PARTNERS THAT MATCH BELOW
            </h1>
            <div className=' space-y-6'>
                <header className='flex flex-wrap justify-between  gap-2'>
                    <AmortizationFilter value={filter.amortization} dispatch={dispatch} />
                    <TermFilter value={filter.term} dispatch={dispatch} />
                    <RateFilter value={filter.rate} dispatch={dispatch} />
                    <div className=' flex gap-2 items-center text-xs'>
                        <span>Sort by:</span>
                        <select className=' appearance-none bg-gray-200 py-2 px-1 lg:px-3 rounded-md'>
                            <option value="1"> Crashback</option>
                            <option value="2"> ... </option>
                        </select>
                    </div>
                </header>
                <main className='flex w-full flex-row lg:flex-col  overflow-x-auto p-2 gap-2 lg:gap-5'>
                    <header className='hidden lg:flex w-full font-bold shadow '>
                        <h6 className=' basis-1/6 justify-center items-center'>
                        </h6>
                        <h6 className='flex basis-1/6 justify-center items-center flex-shrink-0 '>
                            Partener
                        </h6>
                        <h6 className='flex basis-1/6 justify-center items-center flex-shrink-0'>
                            Rates & Monthly Payment
                        </h6>
                        <h6 className='flex basis-1/6 justify-center items-center flex-shrink-0'>
                            Cashback
                        </h6>
                        <h6 className='flex basis-1/6 justify-center items-center flex-shrink-0'>
                            Bonus Products
                        </h6>
                        <h6 className='flex basis-1/6 justify-center items-center flex-shrink-0'>
                            Documents Required
                        </h6>
                    </header>
                    {/*matches*/}

                    {
                        results &&
                        results.map((result, index) => (
                            <Match key={index}
                                lender={result.lender}
                                program={result.program}
                                infos={result.outputData}
                            />
                        ))

                    }
                    {
                        loading && <Loading />
                    }
                    {
                        !loading && isEmptyArray(results) &&
                        <h1 className='mt-8 flex w-full text-lg text-[#398ECE] justify-center'>
                            No results match the current filter!
                        </h1>
                    }

                </main>

            </div>

            
            <div className='flex justify-center gap-2'>
            <Pagination dispatch={dispatch} start={filter.start} count={count} pageSize={pageSize} />
                
            </div>
        </section>
    )


}
