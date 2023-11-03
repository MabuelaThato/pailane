import { Badge } from '@/components/ui/badge'
import React from 'react'

const Retirement = () => {
  return (
    <div className='my-12' id='retirement'>
    <h2 className='text-2xl md:text-4xl md:mb-4 font-black'>
        Retirement Planning
    </h2>
    
    <div className='lg:grid lg:grid-cols-2 lg:space-x-20 my-6 md:my-12'>
       
        <img src="/retirement.jpg" alt="" />
       
        <div className='place-self-center pt-6 md:mt-0'>
            <p className=''>
            Retirement is a journey, and the sooner you start planning for it, the better.
            As hard as you work now, you will have to retire at some point, 
            and you want that point to be comfortable and filled with bliss.
            </p>
            <br />
            <p>
                 I will work with you create a retirement plan that aligns with your lifestyle and 
                 financial goals, ensuring a secure and stress-free retirement.
            </p>
            <br />
            <p>
                My approach to retirement planning is comprehensive. 
                Whether you are planning towards your retirement, are at retirement, 
                post-retirement or navigating the complexities of transferring retirement funds, 
                I am here for you.
            </p>
        </div>
    </div>
</div>
  )
}

export default Retirement