import React from 'react'
import ContactForm from './form'
import { Card } from '@/components/ui/card'
import Bookings from './booking'
import Hero from './hero'

const page = () => {
  return (
    <div className='bg-[#F6F6F6] min-h-screen w-full pb-10'>
      <Hero />
      <div className='drop-shadow-lg p-4 lg:p-6 m-6 md:m-12 lg:m-16 bg-white rounded'>
        <div className='md:grid md:grid-cols-2 md:m-2 lg:m-8 md:divide-x'>
          <ContactForm />
          <Bookings />
        </div>
      </div>
    </div>
  )
}

export default page