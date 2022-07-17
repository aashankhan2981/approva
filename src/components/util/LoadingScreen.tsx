import { Backdrop, CircularProgress } from '@mui/material';
import React, { useState } from 'react';

export const LoadingScreen:React.FC<{isopen:boolean}> = ({isopen}) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isopen}
        >
            <CircularProgress color="primary" />
        </Backdrop>
    ) 
};
