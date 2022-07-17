import React from 'react'
import Image from 'next/image'
import { MainHeader } from '../../../components/layout'
import { Results } from '../../../components/landing/results'
import { useRouter } from 'next/router'
const ResultPage = () => {
    //later we specify id
    const router = useRouter()
    const { app_id } = router.query
    return (
        <div>
            <div className=" w-full min-h-screen text-dark bg-white">
                <MainHeader />
                <main className='flex text-center flex-col gap-y-10 2xl:container mx-auto'>
                    <Results id={app_id} />
                </main>
            </div>
        </div>
    )
}

export default ResultPage