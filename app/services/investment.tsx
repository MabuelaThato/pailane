import React from 'react'

const Investment = () => {
  return (
    <div className='my-10' id='investment'>
        <h1 className='text-2xl md:text-4xl mb-6 font-black'>
        Long-Term Investment for Capital Growth
        </h1>
        <p>
        If your financial ambitions involve growing your capital to create lasting wealth, then look no further. 
        </p>
        <p className='font-bold'>
        We specialize in curating investment portfolios that carefully consider the following factors:
        </p>
        <div className='grid grid-cols-2 md:grid-cols-4 space-x-2 md:space-y-0 text-center my-12 mx-2 lg:mx-24'>
            <div className='mb-6 md:mb-0'>
                <img src="/goals.png" className='w-[60px] md:w-[100px] mx-auto mb-3' />
                <p className='font-bold text-md md:text-lg'>Goals</p>
            </div>
            <div className='mb-6 md:mb-0'>
            <img src="/lifestyle.png" className='w-[60px] md:w-[100px] mx-auto mb-3' />
            <p className='font-bold text-md md:text-lg'>Lifestyle</p>
            </div>
            <div>
            <img src="/risk.png" className='w-[60px] md:w-[100px] mx-auto mb-3' />
            <p className='font-bold text-md md:text-lg'>Risk tolerance</p>
            </div>
            <div>
            <img src="/time.png" className='w-[60px] md:w-[100px] mx-auto mb-3' />
            <p className='font-bold text-md md:text-lg'>Time horizon</p>
            </div>
        </div>
        <p>
        Whether you opt for consistent monthly contributions or a one-time lump sum investment (or both), 
        you actually purchase units of these assets in order to gain exposure to their relative performance.
        </p>
        
        
    </div>
  )
}

export default Investment