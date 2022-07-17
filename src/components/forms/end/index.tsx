import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { LongArrowLeft, ThumsUpIcon } from '../../icons'
import { ApplicationStatusContext, AuthenticationContext, FormContext } from '../../../contexts'
import Link from 'next/link'
import { Button, Typography } from '@mui/material'
import { collection, query, where, getDocs, addDoc, setDoc, doc, } from "firebase/firestore";
import { db } from '../../../firebase/config'


export const TheEnd = () => {
    /** */
    const user = useContext(AuthenticationContext)
    const { dispatchData, rootForm } = useContext(FormContext)
    const { dispatch } = useContext(ApplicationStatusContext)
    const [app_id, setAppID] = useState(rootForm.current_app_id || "")
    
    useEffect(() => {
        if (user) {
            (async function () {
                const q = query(collection(db, "applicants"), where("user", "==", user.uid));
                const querySnapshot = await getDocs(q);
                rootForm.applicants.forEach(async (applicant) => {
                    if (applicant.user) {
                        if (querySnapshot.empty) {
                            await addDoc(collection(db, "applicants"), applicant);
                        }
                        else {
                            await setDoc(querySnapshot.docs[0].ref, applicant, { merge: true });
                        }
                    }
                })

                const application = rootForm.application
                application.applicants = rootForm.applicants
                application['createdate'] = new Date()

                try {
                    if (!app_id) {
                        try {
                            const applicationRef = await addDoc(collection(db, "applications"), application);
                            setAppID(applicationRef.id)
                            dispatchData(
                                {
                                    type: "SET_SISSION_DATA",
                                    payload: {
                                        current_app_id: applicationRef.id
                                    }
                                }
                            )
                        } catch (err) {
                            console.log(err);
                        }

                    } else {
                        await setDoc(doc(db, "applications", app_id), application, { merge: true })
                    }
                } catch (err) {
                }



            }())
        }


    }, [rootForm])

    return (
        <div className='p-2 lg:relative top-0 left-0 w-full flex-grow bg-cover bg-no-repeat items-center rounded bg-happy-family flex flex-col bg-[#D1EDFF]' >

            <Image src={'/imgs/happyfamily.svg'} width={512} height={410} alt="" />
            <div className='bg-white rounded-2xl py-6 px-4 flex flex-col gap-3 items-center w-full max-w-lg'>
                <h1 className='flex items-center text-xl gap-1 text-[#398ECE] font-medium text-[30px] uppercase'>
                    Great Job!
                    <ThumsUpIcon className={"text-yellow-500 w-8 h-8"} />
                </h1>
                <Typography  className=' text-[#398ECE] text-xs text-center '>
                    Your information is being processed, and we are matching as many lenders to you as possible. <br />
                    More Lenders = More Competition = Better Rates + Products for you.
                </Typography>

            </div>
            <div className='max-w-lg flex w-full mt-12 gap-8 justify-center'>
                {/* <Button onClick={() => dispatch({ type: "GO_BACK" })} variant='outlined' sx={{ paddingY: 1, paddingX: 2 }}>
                    Back
                </Button>
                <Link href="/test">
                    <Button>
                        results
                    </Button>
                </Link> */}
                {app_id != "" ?
                    <Link href={`/mortgage/results/${app_id}`}>
                        <a>
                            <Button variant='contained' sx={{ paddingY: 1, paddingX: 2,fontFamily:"Poppins", display:"flex", justifyContent:"space-around" }} className='flex flex-grow gap-2 w-full text-xs  items-center mt-12 text-white justify-around mb-6 rounded-sm'>
                                <h1 className=' text-xs' > You&apos;re one click away from your Dream Home</h1>
                                <LongArrowLeft className="w-6 h-6 ml-5" />
                            </Button>
                        </a>
                    </Link>
                    :
                    <Button disabled variant='contained' sx={{ paddingY: 1, paddingX: 2 }} className='flex flex-grow gap-2 w-full text-xs  items-center  mt-12 text-white justify-around mb-6 rounded-sm'>
                        <h1 className=' text-xs' > You&apos;re one click away from your Dream Home</h1>
                        <LongArrowLeft className="w-6 h-6 ml-5" />
                    </Button>
                }

            </div>
        </div>
    )
}


