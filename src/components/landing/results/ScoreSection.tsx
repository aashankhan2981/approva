import React, { useMemo } from 'react'
import { isEmptyArray } from '../../../helpers'
import { Score } from './Score'

export const ScoreSection = ({ data }) => {
    const {gds,tds,fico}=data ||{}
    const GDS = gds || "-"
    const TDS = tds || "-"
    const FICO =fico? typeof(data.fico)==="number"?data.fico: Math.max(...data.fico):"-"


    return  (
        <section className=' flex flex-col items-center w-full text-dark'>
            <div className='flex flex-col items-center gap-6 '>
                <h1 className=' text-xl lg:text-2xl font-bold  '>
                    JESSICA&lsquo;S FINANCIAL RATIOS
                </h1>
                <h2 className=' text-base lg:text-xl'>
                    GREAT NEWS! WE HAVE 23 LENDING PARTNERS INTERESTED IN YOUR APPLICATION
                </h2>
                <div className='flex w-full max-w-full justify-center flex-wrap gap-6 '>
                    <Score name="credit score" meaning="" value={FICO} assessment={FICO > 680 ? "GOOD" : "FAIR"} tooltip="" />
                    <Score name="GDS" meaning="Gross Debt Service Ration" value={GDS} assessment="FINE" tooltip="" />
                    <Score name="TDS" meaning="Total Debt Service Ration" value={TDS} assessment="GOOD" tooltip="" />
                </div>
            </div>
        </section>
    )
}
