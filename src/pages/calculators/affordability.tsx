import { NextPage } from 'next'
import React from 'react'
import { HowMuchCanIAffordForm } from '../../components/forms'
import { MainHeader } from '../../components/layout'

const affordability:NextPage = () => {
  return (
    <div >
    <div className=" w-full min-h-screen  ">
      <MainHeader/>
      <main className='flex items-center gap-4 p-8  max-w-2xl mx-auto'>
       <HowMuchCanIAffordForm/>
        
      </main>
      
    </div>
  </div>
  )
}

export default affordability