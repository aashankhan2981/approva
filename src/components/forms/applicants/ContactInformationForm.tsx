
import { ButtonGroup, Button, Backdrop, CircularProgress, } from '@mui/material'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useFillForm, useFireBaseAuth } from '../../../hooks'
import { NextPrevButtuns, TextInput, SelectInput, DateInput, GooglePlacesInput } from '../../inputs'
import { PasswordModal } from './PasswordModal';
import { AuthenticationContext } from '../../../contexts';
import { FillObject, isEmptyArray } from '../../../helpers';
import { PhoneNumberInput } from '../../inputs/PhoneNumberInput';
import { LoadingScreen } from '../../util/LoadingScreen';
import OTPModal from './OtpModal';
import * as yup from 'yup';
import Confetti from 'react-confetti';
import { SaveProgressDialog } from "./SaveProgressDialog";
import { Facebook, Google, Twitter } from '@mui/icons-material';
import moment from 'moment';

const phoneRegExp = /(1[.-])?(\(\d{3}\)[.-]|(\d{3}[.-]?)){2}\d{4}/g
const ValidationShema = yup.object().shape({
    firstName: yup.string().required("Please Enter your first Name"),
    lastName: yup.string().required("Please Enter your first Name"),
    birthday: yup.date().required("Please Enter your birthday").typeError("Please Enter your birthday"),
    email: yup.string().required("Please Enter your Email adress").email("Enter valide email address"),
    phone: yup.string().required("please Enter youe Phone number").matches(phoneRegExp, 'Phone number is not valid'),
    //currrentAdress: yup.object().required("please enter your address").typeError("please enter your address"),
    /*province: yup.string().required("please Select your province")*/
})



export const ContactInformationForm = () => {
    const [showDialog, setShowDialog] = useState(true);
    const user = useContext(AuthenticationContext)
    const { auth_state, dispatch } = useFireBaseAuth()
    const { firstName, lastName, birthday, email, password, phone } = form
    const [modals, setModals] = useState({ otp: false, password: false });
    const phone_ref = useRef(null)

    const initialState = FillObject(
        {
            user: user ? user.uid : null,
            type: "main",// main || co_applicant || cosigner 
            fullName: user ? (user.displayName || "") : "",
            firstName: user ? user.displayName?.split(" ")[0] || "" : "",
            lastName: user ? user.displayName?.split(" ")[1] || "" : "",
            birthday: null,
            email: user ? user.email || "" : "",
            password: "",
            phone: user ? user.phoneNumber || "" : "",
            //currrentAdress: "",
        },
        useFillForm()
    )
    const [data, setData] = useState(initialState)

    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(()=>{
        const timer= setTimeout(()=>{
           showConfetti && setShowConfetti(false);
        },5000)
        return ()=>{
            clearTimeout(timer)
        }
    },[])

    /** error handling */
    const [showErrors, setShowErrors] = useState(false)
    const showTheErrors = () => {
        setShowErrors(true)
    }

    /** check errors */
    const initialErrors: any = {}
    const [errors, setErrors] = useState(initialErrors)

    useEffect(() => {
        setData(data => ({ ...data, user: user != null ? user.uid : null }))
    }, [user])

    useEffect(() => {
        for (let key of Object.keys(data)) {
            try {
                yup.reach(ValidationShema, key).validate(data[key]).then(() => {
                    setErrors(errors => ({ ...errors, [key]: [] }))
                }).catch(err => {
                    setErrors(errors => ({ ...errors, [key]: err.errors }))
                })
            } catch (err) {
                continue
            }
        }
    }, [data])

    const isValidForm = useMemo(() =>
        isEmptyArray(Object.values(errors).filter(error_arr => !isEmptyArray(error_arr))) && user != null
        , [errors, user]
    )

    /** */
    const googleSignin = async () => {
        await dispatch({ type: "GOOGLE_SIGNIN" })
    }
    const openModal = () => {
        setModals({ ...modals, otp: false })
    }
    const SignUpWithPassword = async () => {
        dispatch(
            {
                type: "SIGNUP",
                payload: {
                    email: data.email,
                    password: data.password,
                    fullName: getFullName(data.firstName, data.lastName),
                }
            })
    }
    const getFullName = (firstN: string, lastN: string): string => `${firstN} ${lastN}`


    return (
        <div className="flex flex-col gap-8 w-full pr-5 pl-3 py-3">
            {showDialog && !user && <SaveProgressDialog onClose={() => setShowDialog(false)} />}
            {showConfetti && <Confetti numberOfPieces={100} />}
            <div className='grid grid-cols-2 gap-5'>
                <div className=' flex flex-col gap-2 col-span-1 pr-16 border-r'>
                    <div className='flex w-full items-center gap-4'>
                        <TextInput
                            type={firstName.type}
                            label={firstName.label}
                            classes={{labelParent: 'flex justify-center items-center gap-1'}}
                            placeholder={firstName.placeholder}
                            isrequired={firstName.isrequired}
                            tooltip={firstName.tooltip}
                            defaultValue={data.firstName}
                            onChange={(value) => setData({ ...data, firstName: value })}
                            errors={errors.firstName}
                            showErrors={showErrors}
                        />
                        <TextInput
                            type={lastName.type}
                            label={lastName.label}
                            classes={{labelParent: 'flex justify-center items-center gap-1'}}
                            placeholder={lastName.placeholder}
                            isrequired={lastName.isrequired}
                            tooltip={lastName.tooltip}
                            defaultValue={data.lastName}
                            onChange={(value) => setData({ ...data, lastName: value })}
                            errors={errors.lastName}
                            showErrors={showErrors}
                        />
                    </div>
                    <div>
                        <DateInput
                            label={birthday.label}
                            views={['year', 'month', 'day']}
                            placeholder={birthday.placeholder}
                            classes={{label: 'flex items-center justify-center gap-2'}}
                            isrequired={birthday.isrequired}
                            tooltip={birthday.tooltip}
                            defaultValue={data.birthday}
                            onChange={(value) => setData({ ...data, birthday: value })}
                            errors={errors.birthday}
                            showErrors={showErrors}
                        />
                    </div>

                    <div >
                        <TextInput
                            type={email.type}
                            label={email.label}
                            classes={{labelParent: 'flex justify-center items-center gap-1'}}
                            placeholder={email.placeholder}
                            isrequired={email.isrequired}
                            tooltip={email.tooltip}
                            defaultValue={data.email}
                            onChange={(value) => setData({ ...data, email: value })}
                            errors={errors.email}
                            showErrors={showErrors}
                        />
                    </div>



                    {!user &&
                        <div className='flex justify-between items-center gap-6 mb-3 '>
                            <TextInput
                                type={password.type}
                                label={password.label}
                                placeholder={password.placeholder}
                                isrequired={password.isrequired}
                                tooltip={password.tooltip}
                                defaultValue={data.password}
                                onChange={(value) => setData({ ...data, password: value })}
                            />
                            <Button
                                onClick={SignUpWithPassword}
                                className=' self-end'
                            >
                                Register
                            </Button>
                        </div>
                    }
                    <div>
                        <div className='grid grid-cols-11'>
                            <div className='col-span-5 bg-gray-400 mt-2 h-1'></div>
                            <div className='col-span-1 text-gray-900 text-sm text-center'>Or</div>
                            <div className='col-span-5 bg-gray-400 mt-2 h-1'></div>
                        </div>
                    </div>
                    <div className=' basis-1/2 mt-2'>
                        <PhoneNumberInput
                            type={phone.type}
                            label={phone.label}
                            placeholder={phone.placeholder}
                            isrequired={phone.isrequired}
                            tooltip={phone.tooltip}
                            defaultValue={data.phone}
                            classes={{labelParent: 'flex items-center justify-center gap-1'}}
                            onChange={(value) => setData({ ...data, phone: "+" + value })}
                            errors={errors.phone}
                            showErrors={showErrors}
                        />
                    </div>
                    {!user &&
                        <div className='pt-1'>
                            <p className="text-sm my-2 text-gray-900">Signin using</p>
                            <div className='flex mt-2.5'>
                                <button className='py-2 px-2 bg-gray-200 rounded-md'
                                    onClick={() => googleSignin()}>
                                    <Google style={{ color: 'black', fontSize: '25' }} />
                                </button>
                                <button className='py-2 mx-3 px-2 bg-blue-800 rounded-md'>
                                    <Facebook style={{ color: 'white', fontSize: '25' }} />
                                </button>
                                <button className='py-2 px-2 mr-5 bg-blue-500 rounded-md'>
                                    <Twitter style={{ color: 'white', fontSize: '25' }} />
                                </button>
                                {/*<Button variant='contained' disabled={!isEmptyArray(errors.fullName) || !isEmptyArray(errors.email)} color="info" onClick={() => setModals({ ...modals, password: true })}  >Password</Button>*/}
                            </div>
                        </div>
                    }
                </div>
                {!user &&
                    <div className='col-span-1 pl-5'>
                        <img src='/signin.gif' className="rounded-xl w-100" />
                        <div className='flex pt-4 justify-center'>
                            {isEmptyArray(errors.phone) ?
                                <button className='px-10 bg-green-500 rounded-md py-3 text-white font-semibold hover:bg-green-600'
                                    onClick={() => setModals({ ...modals, otp: true })}
                                    ref={phone_ref} id="sign-in-button" disabled={!isEmptyArray(errors.phone)}>
                                    Login via phone
                                </button>
                                :
                                <Button color="success" variant="contained" disabled sx={{ paddingX: 5, paddingY: 1.5 }}>
                                    Login via phone
                                </Button>
                            }

                        </div>
                    </div>
                }

                {/* <div className='col-span-2 border-t-2 border-b-2 py-4'>
                    <div className='m-auto w-1/2'>
                        <GooglePlacesInput
                            label={currrentAdress.label}
                            isrequired={currrentAdress.isrequired}
                            tooltip={currrentAdress.tooltip}
                            defaultValue={data.currrentAdress}
                            onChange={(value) => setData({ ...data, currrentAdress: value })}
                            errors={errors.currrentAdress}
                            showErrors={showErrors}
                            searchOptions={{
                                types: ["address"]
                            }}
                        />
                        {<SelectInput
                            multiple={province.multiple}
                            label={province.label}
                            choices={province.data}
                            isrequired={province.isrequired}
                            placeholder={province.placeholder}
                            tooltip={province.tooltip}
                            defaultValue={data.province}
                            onChange={(value) => setData({ ...data, province: value })}
                            showErrors={showErrors}
                            errors={errors.province}
                        />}
                    </div>
                </div>*/}

            </div>

            <LoadingScreen isopen={auth_state.loading} />
            {
                <div className={`flex flex-col gap-4 items-center ${!user ? "visible" : "invisible"} `}>
                    <div>
                        {modals.otp && <OTPModal phone={data.phone} open={modals.otp} handleClose={() => openModal()} />}
                        {modals.password && <PasswordModal data={data} open={modals.password} handleClose={() => setModals({ ...modals, password: false })} />}
                    </div>
                    {showErrors && <div className="text-xs text-red-500">{!user && <p>please register or signin so we can save your application</p>}</div>}
                </div>
            }


            <NextPrevButtuns data={data} showTheErrors={showTheErrors} isValidForm={isValidForm} />
        </div>
    )
}

const form = {

    fullName: {
        label: "Full Name",
        type: "text",
        isrequired: true,
        placeholder: "Enter your full name",
        tooltip: "Enter your full name",
    },
    firstName: {
        label: "First Name",
        type: "text",
        isrequired: true,
        placeholder: "Enter your first name",
        tooltip: "Enter your first name",
    },
    lastName: {
        label: "Last Name",
        type: "text",
        isrequired: true,
        placeholder: "Enter your last name",
        tooltip: "Enter your last name",
    },
    birthday: {
        label: "Your birthday",
        isrequired: false,
        placeholder: "Birthday",
        tooltip: "enter your birthday",
        readOnly: false,
    },
    email: {
        label: "Email",
        type: "email",
        isrequired: true,
        placeholder: "Enter your Email Adress",
        tooltip: "Enter your Email Adress",
    },
    password: {
        label: "Password",
        type: "password",
        isrequired: false,
        placeholder: "Enter a password",
        tooltip: "Enter a password to signup with email passsword",
    },
    phone: {
        label: "Phone",
        type: "tel",
        isrequired: true,
        placeholder: "Enter your Phone number",
        tooltip: "Enter your Phone number",
    },
    currrentAdress: {
        label: "Where do you currently live?",
        isrequired: false,
        tooltip: "Where do you currently live?",
    },

    province: {
        label: "Province/State",
        multiple: false,
        isrequired: true,
        placeholder: "Province",
        data: [
            { key: "--", value: "" },
            { key: "Alberta", value: "al" },
            { key: "British Columbia", value: "bc" },
            { key: "Manitoba", value: "ma" },
            { key: "New Brunswick", value: "nb" },

            { key: "Newfoundland and Labrador", value: "nl" },
            { key: "Northwest Territories", value: "nt" },
            { key: "Nova Scotia", value: "ns" },
            { key: "Nunavut", value: "nu" },

            { key: "Ontario", value: "on" },
            { key: "Prince Edward Island", value: "pe" },
            { key: "Quebec", value: "qu" },
            { key: "Saskatchewan", value: "sa" },
            { key: "Yukon", value: "yu" },
        ],
        selectedValue: "",
        tooltip: "",
    },

}
