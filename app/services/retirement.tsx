import { Badge } from '@/components/ui/badge'
import React from 'react'

const Retirement = () => {
  return (
    <div className='my-12'>
    <h2 className=' text-4xl mb-4 font-black'>
        Retirement Planning
    </h2>
    <p className=''>
    Retirement is a journey, and the sooner you start planning for it, the better.
    As hard as you work now, you will have to retire at some point, 
    and you want that point to be comfortable and filled with bliss.
    </p>
    <div className='grid grid-cols-2 space-x-20 my-12'>
        <img src="/retirement.jpg" alt="" />
        <div className='place-self-center'>
            <p>
                 We will work with you create a retirement plan that aligns with your lifestyle and 
                 financial goals, ensuring a secure and stress-free retirement.
            </p>
            <br />
            <p>
                Our approach to retirement planning is comprehensive. 
                Whether you are planning towards your retirement, are at retirement, 
                post-retirement or navigating the complexities of transferring retirement funds, 
                we are here for you.
            </p>
        </div>
    </div>
</div>
  )
}

export default Retirement