import React from 'react'
import Link from "next/link";
import { FaSquareFacebook, 
    FaSquareXTwitter, 
    FaLinkedin, 
    FaPhone,
    FaWhatsapp } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='w-full  p-6 bg-[#292929] text-white text-center'>
        <div className='md:grid md:grid-cols-3 lg:mx-24 md:my-10 '>
            <div className='grid grid-rows gap-1 mb-6 md:mb-0 md:text-left'>
                <h1 className='text-2xl font-bold mb-3'>Links</h1>
                <Link href="/services#education" className='hover:underline'>Education Planning</Link>
                <Link href="/services#retirement" className='hover:underline'>Retirement Planning</Link>
                <Link href="/services#investment" className='hover:underline'>Long-term Investment</Link>
            </div>
            <div className='grid grid-rows gap-1 mb-6 md:mb-0 place-content-center md:place-content-start'>
            <h1 className='text-2xl font-bold mb-3 md:text-left'>Contacts</h1>
                <div className='flex '>
                <FaPhone /> 
                <span className='ml-4'>012 433 7278</span>
                </div>
                
                <div className='flex'>
                <FaWhatsapp /> 
                <span className='ml-4'>071 487 5168</span>
                </div>
                
                <div className='flex text-white'>
                <FiMail /> 
                <a href='mailto:tumelo.pailane@liblink.co.za' className='ml-4'>tumelo.pailane@liblink.co.za</a >
                </div>
            </div>
            <div className='grid grid-rows'>
            <h1 className='text-2xl font-bold mb-2 text-center'>Social Media</h1>
                <div className='flex space-x-6 md:space-x-1 lg:space-x-6 text-center place-content-center'>
                <a href=""><FaSquareFacebook size="50px"/></a>
                <a href=""><FaSquareXTwitter size="50px"/></a>
                <a href=""><FaLinkedin  size="50px"/></a>
            </div>
                </div>
        </div>
    </div>
  )
}

export default Footer;