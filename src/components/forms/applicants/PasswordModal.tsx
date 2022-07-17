import React, { useState } from 'react';
import { TextInput } from '../../inputs'
import Backdrop from '@mui/material/Backdrop';
import { CloseIcon } from '../../icons';
import { Button, IconButton, Modal } from '@mui/material'
import { useFireBaseAuth } from '../../../hooks';
import { LoadingScreen } from '../../util/LoadingScreen';

export const PasswordModal = ({ data, open, handleClose }) => {

    const { auth_state, dispatch } = useFireBaseAuth()
    const [password, setPassword] = useState("");

    const SignUp = async () => {
        dispatch(
            {
                type: "SIGNUP",
                payload: { email: data.email, password: password }
            }).then(()=>{handleClose()})

    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <div className='absolute top-1/2 left-1/2 p-4 w-full -translate-x-1/2 -translate-y-1/2 max-w-lg'>
                <div className='p-8  bg-white shadow rounded-lg  w-full '>
                    <div className='flex flex-col gap-6 '>
                        <TextInput
                            type="password"
                            label="Enter your password "
                            placeholder={"password"}
                            isrequired={true}
                            tooltip={""}
                            defaultValue={password}
                            onChange={(value) => setPassword(value)}
                        />
                        <Button
                            onClick={() => SignUp()}
                            className=' self-end'
                        >
                            Register
                        </Button>
                    </div>
                    <LoadingScreen isopen={auth_state.loading}/>

                    <div className=' absolute top-4 right-4'>
                        <IconButton onClick={handleClose}>
                            <CloseIcon className='w-5 h-5' />
                        </IconButton>
                    </div>

                </div>
            </div>



        </Modal>
    )

}
