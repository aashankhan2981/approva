import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export const Loading = () => {
    return (
        <div className=' absolute top-0 left-0 h-full w-full flex justify-center items-center '>
            <CircularProgress color='primary' />
        </div>
    )
};
