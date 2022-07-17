import React from 'react'
import Image from 'next/image'
import { CkeckedIcon, InfoIcon, InfoOutLineIcon } from '../../icons'
import { getTodayPlusX } from '../../../helpers'
import { Button, Tooltip } from '@mui/material'
import { LightTooltip } from '../../util'
export const Match = (props) => {

    const { lender, program, infos } = props
    const fixed = infos.fixedRateMonthlyPayment
    const variable = infos.variableRateMonthlyPayment
    const totalCashback = round(infos.bankCashBack + infos.approvaCashBack, 2)
    const parsefullText = (text) => {
        if (!text) return []
        const arr = text.split("-")
        arr.shift()
        return arr
    }
    function round(value, precision) {
        return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision)
    }

    return (
        <div className='flex h-fit flex-col min-w-3xs lg:w-full lg:flex-row'>
            <div className=' py-4 lg:py-0  flex basis-1/6 flex-col justify-center items-center flex-shrink-0 '>
                {/* <Image src="/imgs/PerFi.svg" width={70} height={18} alt="" />
                <div className='flex items-center gap-2 text-dark'>
                    <span className=' text-sm'>  </span>
                    <InfoOutLineIcon className="w-5 h-5" />
                </div> */}
                <CkeckedIcon className="w-12 h-12 text-green-300 shadow border-2 border-white rounded-full" />
            </div>
            <div style={{ backgroundColor: lender.color }} className={` relative basis-1/6 h-32 py-6 lg:py-0 lg:h-48 w-full  rounded-t-3xl lg:rounded-l-3xl flex flex-shrink-0`}>
                <div className=' relative w-1/2 h-24 lg-h-1/2 m-auto'>
                    <Image layout='fill' src={lender.logo}  alt="" />
                </div>
                
            </div>
            <div className=' basis-1/6 py-4 lg-py-0   flex  flex-col p-2 gap-1 items-center justify-around flex-shrink-0'>
                {
                    variable && variable.value > 0 &&
                    <div className=' text-green-700'>
                        <p >{round(variable.intrestRate, 2)}% <span className=' text-xs'>Variable</span></p>
                        <p>${round(variable.value, 2)} <span className=' text-xs'>/Month variable</span></p>
                    </div>
                }
                <p className='text-xs text-gray-800'>Rate Guranteed Until: <span className=' font-semibold'>{getTodayPlusX(90)}</span> </p>
                {
                    fixed && fixed.value > 0 &&
                    <div className=' text-dark'>
                        <p>{round(fixed.intrestRate, 2)}% <span className=' text-xs'>Fixed</span></p>
                        <p>${round(fixed.value, 2)} <span className=' text-xs'>/Month fixed</span></p>
                    </div>
                }

            </div>
            <div className='basis-1/6 py-4 bg-gray-200 flex flex-col items-center flex-shrink-0'>
                {totalCashback > 0 &&
                    <h2 className='py-4 border-b border-gray-300 text-xl font-bold w-10/12 text-center'>
                        ${totalCashback}
                    </h2>
                }
                <div className=' text-dark flex flex-col items-center font-bold py-4 text-center'>
                    {infos.bankCashBack > 0 &&
                        <div className='flex items-center gap-2'>
                            <p>{lender.name}  ${round(infos.bankCashBack, 2)}</p>
                        </div>
                    }
                    {infos.bankCashBack > 0 && infos.approvaCashBack > 0 && <p>+</p>}
                    {infos.approvaCashBack > 0 &&
                        <p className='flex gap-2'>
                            <span>
                                <i className=' text-green-500'>Approva</i>
                            </span>
                            <span> ${round(infos.approvaCashBack, 2)}</span>
                        </p>
                    }
                </div>
            </div>
            <div className=' basis-1/6 flex-grow text-xs p-4 text-dark flex flex-col text-left  flex-shrink-0'>
                {
                    lender.bunus_products &&
                    parsefullText(lender.bunus_products).map((item, index) => (
                        <p key={index}>-{item} </p>
                    )
                    )
                }
            </div>
            <div className='basis-1/6 py-12 flex-grow relative  bg-gray-200 flex items-center justify-center flex-shrink-0'>
                <div className=' cursor-pointer'>

                    <Button>
                        <Image src="/imgs/document.svg" width={64} height={66} alt="" />
                    </Button>

                </div>
                {totalCashback>0 &&
                    <div style={{ backgroundColor: lender.color }} className={` absolute skew-x-12 text-xs text-white  -top-2 -right-1 py-1 px-2`}>
                        Best Cashback
                    </div>
                }

            </div>

        </div>
    )
}
