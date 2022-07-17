import { Alert, AlertColor, Snackbar } from '@mui/material';
import React, { createContext, useState } from 'react'


type alertType={
    status:AlertColor,
    message:string
}

export const AlertContext:React.Context<React.Dispatch<React.SetStateAction<alertType>>> = createContext(()=>{})

export const AlertProvider = ({ children }) => {
    const [alert, setAlert]:[alertType,React.Dispatch<React.SetStateAction<alertType>>] = useState({ status: "info", message: "" })


    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setAlert({status:"info", message:""});
      };

    return (
        <AlertContext.Provider value={setAlert}>
            {children}
            
            <Snackbar open={alert.message!=""} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alert.status} sx={{ width: '100%' }}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </AlertContext.Provider>
    )
}