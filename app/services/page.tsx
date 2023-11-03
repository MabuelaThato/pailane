import React from 'react'
import Hero from './hero'
import Education from './education'
import Retirement from './retirement'
import Investment from './investment'

const page = () => {
  return (
    <div className='bg-[#F6F6F6]'>
        <Hero />
        <div className='md:px-20 p-10 md:p-16 '>
        <Education />
        <Retirement />
        <Investment />
        </div>
        
    </div>
  )
}

export default page