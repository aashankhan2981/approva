import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import MUILink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { LockIcon } from '../../components/icons';
import { useRouter } from 'next/router'
import { AuthenticationContext } from '../../contexts';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import OTPModal from '../../components/forms/applicants/OtpModal';
import { MainHeader } from '../../components/layout';



export default function Forgot() {
    const router = useRouter()
    const user = React.useContext(AuthenticationContext)
    const [phone, setPhone] = React.useState("")
    const [open, setOpen] = React.useState(false)
    
    const openModal = () => {

        setOpen(true)
    }
    const updatePhone = (value) => {
        setPhone("+" + value)
    }
    React.useLayoutEffect(() => {
        user ? router.push("/") : "do nothing";
    }, [user])

    return (
        <div className='w-full min-h-screen flex flex-col'>
            <MainHeader/>
            <div className=' grow flex w-full h-full'>
                <Container
                    component="main" maxWidth="xs"
                    className=' bg-white m-auto rounded-xl shadow-2xl p-4'
                >
                    <CssBaseline />
                    <div className=' mt-4 flex flex-col items-center'>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main', padding: 1 }}>
                            <LockIcon className=' text-white' />
                        </Avatar>
                        <h1 className=' text-dark text-xl mb-4'>
                            Sign in with phone
                        </h1>
                        <PhoneInput
                            country={'ca'}
                            onlyCountries={['ca', "dz"]}
                            value={phone}
                            placeholder={"Enter your Phone number"}
                            onChange={(value) => updatePhone(value)}
                            inputStyle={{ padding: "1rem 14px 1rem 58px", width: "100%" }}
                            countryCodeEditable={false}
                        />

                        <Button id="sign-in-button" onClick={() => openModal()} fullWidth variant="contained" sx={{ paddingY: 1, mb: 2, mt: 2 }} >
                            Next
                        </Button>

                        {open && <OTPModal phone={phone} open={open} handleClose={() => setOpen(false)} />}

                        <Grid container>
                            <Grid item>
                                <Link href="/auth/signin">
                                    <MUILink href="#" variant="body2">
                                        {"Sign in"}
                                    </MUILink>
                                </Link>

                            </Grid>
                        </Grid>

                    </div>

                </Container>
            </div>

        </div>

    );
}