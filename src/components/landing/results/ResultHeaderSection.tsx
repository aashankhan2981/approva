import React from 'react'
import Link from 'next/link'

export const ResultHeaderSection = () => {
    return (
        <div className='flex justify-around items-center flex-wrap md:flex-nowrap lg:flex-nowrap my-auto maxWidth px-8'>
            <div className='text-left mr-10 mb-20 w-1/2'>
                <div className='absolute left-1/4 opacity-10 blur-[74px] h-[343px] w-[337px] bg-[#2DCA73]'></div>
                <div className='text-[38px] font-bold leading-[57px] pb-[38px]'>
                    Jonah, congrats! Scroll down to view your tailor-made options
                </div>
                <div className='flex flex-col'>
                    <div className='text-2xl font-normal pb-[20px]'>
                        Our AI models have selected lending partners with the highest chances of approval based on your
                        credit profile.
                    </div>
                    <div className='text-2xl font-normal pb-[20px]'>
                        There are <b>18 Lenders</b> interested in your application!
                    </div>
                    <div className='text-2xl font-normal pb-[30px]'>
                        Below are <b>your credit numbers,</b> toggle through filters on the left side to narrow your
                        selection down.
                    </div>
                </div>
                <Link href={"/mortgage/upload/document"}>
                    <button
                        className='float-right text-base w-40 h-14 mr-8 font-bold bg-[#398ECE] rounded-[28px] text-white'>
                        Continue
                    </button>
                </Link>
                <button className='float-right text-base w-40 h-14 mr-8 font-bold bg-[#398ECE] rounded-[28px] text-white'>
                    Results
                </button>
            </div>
            <div className='mb-20 w-1/2	'>
                <img src={"/imgs/Result-Header-Image.png"} alt=""/>
            </div>
        </div>
    )
}
