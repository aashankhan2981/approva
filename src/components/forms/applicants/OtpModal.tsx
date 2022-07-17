import React, { Dispatch, useContext, useEffect, useState } from 'react';
import { TextInput } from '../../inputs'
import Backdrop from '@mui/material/Backdrop';
import { CloseIcon } from '../../icons';
import { Button, IconButton, Modal } from '@mui/material'
import { auth } from '../../../firebase/config';
import { AlertContext } from '../../../contexts';
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber,updatePhoneNumber } from 'firebase/auth';
//const auth = getAuth()
const OTPModal = ({ phone, open, handleClose }) => {
    const [otp, setotp] = useState("");
    const setAlert = useContext(AlertContext)
    const [confirmationResult, setConfirmationResult]: [ConfirmationResult | null, Dispatch<ConfirmationResult | null>] = useState(null)
    console.log(phone);
    
    useEffect(() => {
        if (typeof (window["recaptchaVerifier"]) === "undefined" && open) {
            window["recaptchaVerifier"] = new RecaptchaVerifier('sign-in-button', {
                'size': 'invisible',
                'callback': (response) => {
                    console.log("captch resolved");
                }
            }, auth)
        }

    }, [])

    useEffect(() => {
            if (open && phone && typeof (window["recaptchaVerifier"]) !== "undefined") {
                signInWithPhoneNumber(auth, phone, window["recaptchaVerifier"]).then(confirmationResult => {
                    setConfirmationResult(confirmationResult);
                    setAlert({ status: 'info', message: "we hv sent you SMS , check your phone" })  
                }).catch(error => {
                    setAlert({ status: 'error', message: error.message })
                })
            }
    }, [phone])


    const verifyOTP = async() => {
        if (typeof (window) !== "undefined") {
            if (otp.length === 6) {

                if (confirmationResult !== null) {
                    confirmationResult.confirm(otp).then((result) => {
                        setAlert({ status: 'success', message: "your phone was verified" })
                        handleClose()
                        window["confirmationResult"] = null
                    }).catch((error) => {
                        setAlert({ status: 'error', message: "verifying otp faild" })
                    });
                }
                else {
                    setAlert({ status: 'info', message: "wait till you recieve the SMS, this might take a few seconds" })
                }

            }
            else setAlert({ status: 'error', message: 'code must be six degits long!' })
        }

    }

    return (
        <div>

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
                        <div className="mb-5 flex">
                            <img src='/typing.gif' className='w-32 m-auto' />
                        </div>
                        <div className='flex flex-col gap-6 '>
                            <TextInput
                                type="text"
                                label="Enter the six digits Confirmation Code "
                                placeholder={"code"}
                                isrequired={true}
                                tooltip={"check your sms, we just sent you, and fill this input with the code in that sms"}
                                defaultValue={otp}
                                onChange={(value) => setotp(value)}
                            />
                            <Button disabled={otp.length != 6} onClick={() => verifyOTP()} className=' self-end'>send</Button>

                        </div>

                        <div className=' absolute top-4 right-4'>
                            <IconButton onClick={handleClose}>
                                <CloseIcon className='w-5 h-5' />
                            </IconButton>
                        </div>

                        {/**this is for captcha keep it */}


                    </div>

                </div>




            </Modal>

        </div>

    )
}

export default OTPModal;