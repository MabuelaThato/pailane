"use client"
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-full shadow-md bg-[#F6F6F6] drop-shadow-lg'>
        <div className='p-5  px-6 lg:px-20 items-center flex justify-between'>
            <div>
              <img src="/liberty.png" alt="" className='w-14 h-14 md:w-20 md:h-16 md:mr-8 lg:mr-10' /> 
              </div>
            <div className='flex flex-cols-3 gap-4 md:gap-6 lg:gap-9 mr-4 md:mr-8 lg:mr-10 '>
                <Link href="/" className='hover:underline'>Home</Link>
                <Link href="/services" className='hover:underline'>Services</Link>
                <Link href="/contact" className='hover:underline'>Contact</Link>
              
            </div>
        </div>
        
    </div>
  )
}

export default Navbar