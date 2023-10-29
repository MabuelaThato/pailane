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
    <div className='w-full  p-6 bg-[#292929] text-white'>
        <div className='grid grid-cols-3 mx-24 my-10'>
            <div className='grid grid-rows gap-1'>
                <h1 className='text-2xl font-bold mb-3'>Links</h1>
                <Link href="/services#education" className='hover:underline'>Education Planning</Link>
                <Link href="/services#retirement" className='hover:underline'>Retirement Planning</Link>
                <Link href="/services#investment" className='hover:underline'>Long-term Investment</Link>
            </div>
            <div className='grid grid-rows gap-1'>
            <h1 className='text-2xl font-bold mb-3'>Contacts</h1>
                <div className='flex'>
                <FaPhone /> 
                <span className='ml-4'>012 433 7278</span>
                </div>
                
                <div className='flex'>
                <FaWhatsapp /> 
                <span className='ml-4'>071 487 5168</span>
                </div>
                
                <div className='flex tetx-white'>
                <FiMail /> 
                <span className='ml-4'>tumelo.pailane@liblink.co.za</span>
                </div>
            </div>
            <div className='grid grid-rows'>
            <h1 className='text-2xl font-bold mb-2 text-center'>Social Media</h1>
                <div className='flex space-x-6 text-center place-content-center'>
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