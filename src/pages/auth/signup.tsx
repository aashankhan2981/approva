import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MUILink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { LockIcon } from '../../components/icons';
import { useFireBaseAuth } from '../../hooks/useFirebaseAuth'
import { LoadingScreen } from '../../components/util/LoadingScreen';
import { useRouter } from 'next/router'
import { AuthenticationContext } from '../../contexts';
import { PhoneNumberInput } from '../../components/inputs/PhoneNumberInput';
import Link from 'next/link';
import { MainHeader } from '../../components/layout';



export default function SignIn() {
    const router = useRouter()
    const user = React.useContext(AuthenticationContext)
    const { auth_state, dispatch } = useFireBaseAuth()
    const { loading } = auth_state;
    async function handleSubmit(e) {
        e.preventDefault();
        const fullname = `${e.target.firstname.value} ${e.target.lastname.value}`
        await dispatch({
            type: "SIGNUP", payload: {
                email: e.target.email.value,
                password: e.target.password.value,
                fullname: fullname
            }
        });
    }
    const googleSignin = async () => {
        await dispatch({ type: "GOOGLE_SIGNIN" })
    }

    React.useLayoutEffect(() => {
        user ? router.push("/") : "do nothing";
    }, [user])

    return (

        <div className='w-full min-h-screen flex flex-col'>
            <MainHeader />
            <LoadingScreen isopen={loading} />
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
                            Sign up
                        </h1>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className=' flex gap-3 '>
                                <TextField margin="normal" required fullWidth id="firstname" label="First Name"
                                    name="firstname"
                                    autoComplete="firstname"

                                />
                                <TextField margin="normal" required fullWidth id="lastname" label="Last Name"
                                    name="lastname"
                                    autoComplete="lastname"

                                />

                            </div>

                            <TextField margin="normal" required fullWidth id="email" label="Email Address"
                                name="email"
                                autoComplete="email"

                            />
                            <TextField margin="normal" required fullWidth label="Password" id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button type="submit" fullWidth variant="contained" sx={{ paddingY: 1, mb: 2, mt: 2 }} >
                                Sign Up
                            </Button>
                        </form>

                        <div className='w-full flex gap-4 mb-6'>
                            <Button onClick={() => googleSignin()} color='error' fullWidth variant="contained" sx={{ paddingY: 1 }}>
                                Google
                            </Button>
                            <Link href="/auth/phone">
                                <a>
                                    <Button color='success' fullWidth variant="contained" sx={{ paddingY: 1 }}>
                                        Phone
                                    </Button>
                                </a>
                            </Link>

                        </div>
                        <div className='flex w-full justify-between'>

                            <Link href="/auth/signin">
                                <MUILink href="#" variant="body2">
                                    {"Already have an account? Sign in"}
                                </MUILink>
                            </Link>

                            <Link href="/">
                                <MUILink href="#" variant="body2">
                                    {"Home"}
                                </MUILink>
                            </Link>
                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );
}