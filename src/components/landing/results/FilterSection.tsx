import { Button } from '@mui/material'
import React from 'react'
import { Filter } from './Filter'

export const FilterSection = () => {
    return (
        <section className=' space-y-8'>
            <h1 className=' text-base  lg:text-2xl text-center text-dark'>
                LET&lsquo;S NARROW THEM DOWN, BASED ON WHAT&lsquo;S IMPORTANT TO YOU. PLEASE SELECT UP TO 4 OPTIONS
            </h1>
            <div className='flex flex-wrap gap-3 justify-center'>
                {
                    filters.map((filter, index) => (
                        <Filter key={index} text={filter.title} checked={filter.checked} borderColor={filter.borderColor} />
                    ))
                }
            </div>
            
        </section>
    
    )
}


const filters = [
    {
        title: "lowest rate",
        checked: true,
        borderColor: "primary",
    },
    {
        title: "FLEXIBILITY IN PAYMENTS",
        checked: false,
        borderColor: "error",
    },
    {
        title: "SENIOR PROGRAMS",
        checked: false,
        borderColor: "info"
    },
    {
        title: "INSURANCE",
        checked: false,
        borderColor: "secondary"
    },
    {
        title: "ONLINE BANKING",
        checked: false,
        borderColor: "success"
    },
    {
        title: "OVERDRAFT PROTECTION",
        checked: false,
        borderColor: "secondary"
    },
    {
        title: "CASH BACK",
        checked: true,
        borderColor: "warning"
    },
    {
        title: "BUNDLE PRICING ",
        checked: false,
        borderColor: "info"
    },
    {
        title: "HOME EQUITY LINE OF CREDIT ",
        checked: false,
        borderColor: "error"
    },
    {
        title: "NO PREPAYMENT PENALTIES ",
        checked: false,
        borderColor: "primary"
    },
    {
        title: "LOWEST MONTHLY PAYMENT",
        checked: false,
        borderColor: "success"
    },


]