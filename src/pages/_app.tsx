import { AlertProvider, ApplicationStatusProvider, AuthenticationProvider, FormProvider } from '../contexts'
import Head from 'next/head'
import 'react-phone-input-2/lib/material.css'
import '../styles/globals.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "aos/dist/aos.css"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { custom_theme } from '../constants';
import { useEffect } from 'react';
import AOS from 'aos';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
     setTimeout(() => {
      AOS.init({
        duration : 1000
      });
     }, 2000);
     AOS.refresh()
   }, []);

  return (
    <ThemeProvider theme={custom_theme}>
      <AuthenticationProvider>
        <AlertProvider>
          <ApplicationStatusProvider>
            <FormProvider>
              <Head>
                <title>Approva</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <div>
                <Component {...pageProps} />
              </div>
            </FormProvider>
          </ApplicationStatusProvider>
        </AlertProvider>
      </AuthenticationProvider>
    </ThemeProvider>
  )
}

export default MyApp
