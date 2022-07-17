import { Button } from '@mui/material'
import React from 'react'
import { CkeckedIcon } from '../../icons'

export const Filter = ({ text, checked, borderColor }) => {
    return (
        <div className={`${checked ? "text-[#398ECE]" : "text-dark"} flex-grow`}>
            <Button variant='outlined' sx={{ borderRadius: 4, color: "inherit" }} color={borderColor} className={` w-full flex-grow font-semibold text-xs lg:text-sm rounded-3xl relative py-2 px-2 lg:py-3 lg:px-5   `}>
                {text}
                {checked && <CkeckedIcon className={` w-6 h-6 text-sky-400 absolute -top-3 -right-3`} />}
            </Button>
        </div>

    )
}
