import React from 'react'
import ContactForm from './form'
import { Card } from '@/components/ui/card'
import Bookings from './booking'
import Hero from './hero'

const page = () => {
  return (
    <div className='bg-[#F6F6F6] min-h-screen w-full pb-10'>
      <Hero />
      <div className='drop-shadow-lg p-10 m-24 bg-white rounded'>
        <div className='grid grid-cols-2 m-12 divide-x'>
          <ContactForm />
          <Bookings />
        </div>
      </div>
    </div>
  )
}

export default page