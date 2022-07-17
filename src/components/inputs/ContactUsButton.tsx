import { Button } from '@mui/material'
import React from 'react'

export const ContactUsButton = () => {
    return (
        <Button className=" fixed bottom-4 right-4 flex w-14 h-14 rounded-ful ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-auto text-[#80B7E0]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
            </svg>
        </Button>
    )
}
