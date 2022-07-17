import React from 'react'
import Image from 'next/image'
import { InfoIcon, InfoOutLineIcon } from '../../icons'
export const Score = ({name,meaning,value,assessment,tooltip}) => {
    return (
        <div className=' flex flex-col items-center w-72'>
            <div className=' relative flex flex-col items-center justify-center w-full  h-44 rationIndicator'>
                <Image src="/imgs/rationIndicator.svg" layout='fill' alt="" />
                <div className=' absolute top-16  flex flex-col items-center'>
                    <h1 className=' text-6xl text-dark'>{value}</h1>
                    <h3 className=' text-3xl text-dark font-semibold'>{assessment}</h3>
                </div>

            </div>
            <div className=' flex justify-center items-center gap-2 flex-wrap mt-3'>
                <h1 className=' text-2xl text-grey font-bold uppercase'>{name} </h1>
                <InfoOutLineIcon className=" w-8 h-8 text-grey" />
            </div>
            <h5 className='text-grey text-lg font-semibold'>{meaning}</h5>
        </div>
    )
}
