import { IconButton, SwipeableDrawer } from '@mui/material';
import React, { useState } from 'react';
import { MenuIcon } from '../../icons';

export const SideMenu = ({menu}) => {
    const [open, setopen] = useState(false);
    const toggleDrawer = (newstate) => {
        setopen(newstate)
    }
    return (
        <div className=' w-screen'>
            <IconButton onClick={() => toggleDrawer(true)}>
                <MenuIcon className="w-6 h-6 text-dark " />
            </IconButton>

            <SwipeableDrawer
                
                anchor={"left"}
                open={open}
                onClose={() => toggleDrawer(false)}
                onOpen={() => toggleDrawer(true)}
                sx={{width:"600px"}}
            >
                <div className=' flex min-w-xs max-w-md w-max'>
                    <h1 className=' m-auto'> menu goes here</h1>
                </div>
            </SwipeableDrawer>
        </div>

    )
};
