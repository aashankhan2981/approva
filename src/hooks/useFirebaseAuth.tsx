import React, { useState, useContext } from 'react'
import { auth } from '../firebase/config'
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
    sendEmailVerification, sendPasswordResetEmail, deleteUser, reauthenticateWithCredential,
    signInWithPopup, GoogleAuthProvider, updateProfile, PhoneAuthProvider
} from "firebase/auth";
import { AlertContext } from '../contexts';
import { formatMessage } from '../helpers/userDialog';

export const useFireBaseAuth = () => {
    const [auth_state, setstate] = useState({ loading: false, user: null, error: null })
    const setAlert = useContext(AlertContext)
    async function dispatch(action) {
        const { type, payload } = action
        setstate({ loading: true, user: null, error: null })

        switch (type) {

            case "SIGNUP":
                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
                    try {
                        await updateProfile(userCredential.user, {
                            displayName: payload.fullname,

                        })
                    } catch (err) {
                        setstate({ loading: false, user: null, error: formatMessage(err.message) })
                    }
                    setstate({ loading: false, user: userCredential.user, error: null })
                    setAlert({ status: "success", message: "you are registered" })
                } catch (err) {
                    setAlert({ status: "error", message: formatMessage(err.message) })
                    setstate({ loading: false, user: null, error: formatMessage(err.message) })
                }; break;

            case "SIGNIN":
                try {
                    const userCredential = await signInWithEmailAndPassword(auth, payload.email, payload.password);
                    setstate({ loading: false, user: userCredential.user, error: null })
                    setAlert({ status: "success", message: "you are logged in" })
                } catch (err) {
                    setAlert({ status: "error", message: formatMessage(err.message) })
                    setstate({ loading: false, user: null, error: formatMessage(err.message) })
                }; break;


            case "SIGNOUT":
                try {
                    await signOut(auth)
                    setstate({ loading: false, user: null, error: null })
                } catch (err) {
                    setstate({ loading: false, user: null, error: formatMessage(err.message) })
                }; break;

            case "SEND_EMAIL_VERIFICATION":
                try {
                    await sendEmailVerification(auth.currentUser)
                    setstate({ loading: false, user: null, error: null })
                } catch (err) {
                    setstate({ loading: false, user: null, error: formatMessage(err.message) })
                }; break;

            case "SEND_RESET_PASSWORD_EMAIL":
                try {
                    await sendPasswordResetEmail(auth, payload.email)
                    setstate({ loading: false, user: null, error: null })
                    setAlert({ status: "success", message: "email was sent to you, to reset your password" })
                } catch (err) {
                    setAlert({ status: "error", message: formatMessage(err.message) })
                    setstate({ loading: false, user: null, error: formatMessage(err.message) })
                }; break;

            case "DELETE_USER":
                try {
                    await deleteUser(auth.currentUser)
                    setstate({ loading: false, user: null, error: null })
                } catch (err) {
                    setstate({ loading: false, user: null, error: formatMessage(err.message) })
                }; break;
            //Use before operations such as updatePassword that require tokens from recent sign-in attempts. 

            /*case "REAUTHENTICATE":
                try {
                    await reauthenticateWithCredential(auth.currentUser, credential)
                    setstate({ loading: false, user: null, error: null })
                } catch (err) {
                    setstate({ loading: false, user: null, error: formatMessage(err.message) })
                }; break;*/
           
                
               

            case "GOOGLE_SIGNIN":
                const provider = new GoogleAuthProvider();
                try {
                    const result = await signInWithPopup(auth, provider);
                    //const credential = GoogleAuthProvider.credentialFromResult(result);
                    //const token = credential.accessToken;
                    const user = result.user;
                    setstate({ loading: false, user: user, error: null })
                } catch (err) {
                    setstate({ loading: false, user: null, error: formatMessage(err.message) })
                }; break;

            default:
                throw new Error("action undefined !")
        }
    }

    return { auth_state, dispatch };
}

