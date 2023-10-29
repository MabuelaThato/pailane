import React from 'react'
import Hero from './hero'
import Education from './education'
import Retirement from './retirement'
import Investment from './investment'

const page = () => {
  return (
    <div className='bg-[#F6F6F6]'>
        <Hero />
        <div className='px-20 p-16 '>
        <Education />
        <Retirement />
        <Investment />
        </div>
        
    </div>
  )
}

export default page