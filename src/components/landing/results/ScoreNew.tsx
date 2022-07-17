import React from 'react'
import Image from 'next/image'
import { InfoIcon, InfoOutLineIcon } from '../../icons'
export const ScoreNew = ({name,meaning,value,assessment,tooltip}) => {
    return (
        <div className=' flex flex-col items-center w-[15.5rem]  shadow-custom2 shadow-[#1885D0]/[0.2] rounded-[25px]'>
            <div className=' relative flex flex-col items-center justify-center w-full mt-2 h-36 rationIndicator'>
                <Image src="/imgs/rationIndicator.svg" height={129} width={189} alt="" />
                <div className=' absolute top-16  flex flex-col items-center'>
                    <h1 className=' text-4xl text-dark font-semibold'>{value}</h1>
                    <h3 className=' text-2xl text-dark font-semibold'>{assessment}</h3>
                </div>

            </div>
            <div className=' flex justify-center items-center gap-2 flex-wrap'>
                <div className='text-base text-grey font-semibold uppercase'>{name} </div>
                <InfoOutLineIcon className=" w-4 h-4 text-grey" />
            </div>
            <h5 className='text-grey text-sm font-semibold pb-5'>{meaning}</h5>
        </div>
    )
}
