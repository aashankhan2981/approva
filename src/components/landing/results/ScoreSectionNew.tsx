import React, { useMemo } from 'react'
import { ScoreNew } from './ScoreNew'

export const ScoreSectionNew = ({ data }) => {
    const {gds,tds,fico}=data ||{}
    const GDS = gds || "-"
    const TDS = tds || "-"
    const FICO =fico? typeof(data.fico)==="number"?data.fico: Math.max(...data.fico):"-"


    return  (
        <section className=' flex flex-col items-center w-full text-dark pt-8'>
            <div className='absolute opacity-10 blur-[74px] h-[107px] left-[10%] w-[104px] bg-[#2DCA73]'></div>
            <div className='flex flex-col items-center gap-6 '>
                <div className='flex w-full max-w-full justify-center flex-wrap gap-40 '>
                    <ScoreNew name="credit score" meaning="" value={FICO} assessment={FICO > 680 ? "GOOD" : "FAIR"} tooltip="" />
                    <ScoreNew name="GDS" meaning="Gross Debt Service Ration" value={GDS} assessment="FINE" tooltip="" />
                    <ScoreNew name="TDS" meaning="Total Debt Service Ration" value={TDS} assessment="GOOD" tooltip="" />
                </div>
            </div>
            <div className='absolute opacity-10 blur-[74px] h-[107px] right-[10%] w-[104px] bg-[#2DCA73]'></div>
        </section>
    )
}
