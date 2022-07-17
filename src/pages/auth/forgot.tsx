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
import Link from 'next/link';
import { MainHeader } from '../../components/layout';



export default function Forgot() {
    const router = useRouter()
    const user = React.useContext(AuthenticationContext)
    const { auth_state, dispatch } = useFireBaseAuth()
    const { loading } = auth_state;
    async function handleSubmit(e) {
        e.preventDefault();
        await dispatch({ type: "SEND_RESET_PASSWORD_EMAIL", payload: { email: e.target.email.value } });
    }
    React.useLayoutEffect(() => {
        user ? router.push("/") : "do nothing";
    }, [user])

    return (

        <div className='w-full min-h-screen flex flex-col'>
            <MainHeader/>
            <LoadingScreen isopen={loading} />
            <div className=' grow flex w-full h-full'>
                <Container
                    component="main" maxWidth="xs"
                    className=' bg-white m-auto rounded-xl shadow-2xl p-4'
                >
                    <CssBaseline />
                    <div className=' mt-8 flex flex-col items-center'>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main', padding: 1 }}>
                            <LockIcon className=' text-white' />
                        </Avatar>
                        <h1 className=' text-dark text-xl'>
                            Sign in
                        </h1>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <TextField margin="normal" required fullWidth id="email" label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />

                            <Button type="submit" fullWidth variant="contained" sx={{ paddingY: 1, mb: 2, mt: 2 }} >
                                Send
                            </Button>
                        </form>

                        <Link href="/auth/signin">
                            <MUILink href="#" variant="body2">
                                Back to sign in
                            </MUILink>
                        </Link>
                    </div>

                </Container>
            </div>
        </div>

    );
}