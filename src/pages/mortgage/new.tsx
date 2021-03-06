import Head from 'next/head'
import { useEffect, useContext } from 'react';
import { Header, SideBar, Main } from '../../components/layout'
import { Progression } from '../../components/util'
import { FormProvider } from '../../contexts/FormContext'
import { FormContext, ApplicationStatusContext } from "../../contexts";


export default function Home() {

  const { appStatus } = useContext(ApplicationStatusContext);


  return (
    <div >
      <Head>
        <title>aprova.ca</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full min-h-screen  mx-auto bg-[#ECF4FB]">
        <Header />
        <div className='flex flex-col flex-grow w-full container mx-auto px-4 lg:px-20' >
            <SideBar />
          <div className="flex lg:flex-row flex-grow   flex-col gap-2 lg:gap-8 py-8">
            <Progression extraStyle={" lg:hidden"}/>
               <Main />
          </div>
        </div>

      </div>

    </div>
  )
}
