import React from 'react'

const Investment = () => {
  return (
    <div className='my-10'>
        <h1 className='text-4xl mb-6 font-black'>
        Long-Term Investment for Capital Growth
        </h1>
        <p>
        If your financial ambitions involve growing your capital to create lasting wealth, say no more. 
        </p>
        <br />
        <p>
        We specialize in curating investment portfolios that carefully consider the following factors:
        </p>
        <div className='grid grid-cols-4 space-x-2 text-center my-12 mx-24'>
            <div className=''>
                <img src="/goals.png" className='w-[100px] mx-auto mb-3' />
                <p className='font-bold text-lg'>Goals</p>
            </div>
            <div>
            <img src="/lifestyle.png" className='w-[100px] mx-auto mb-3' />
            <p className='font-bold text-lg'>Lifestyle</p>
            </div>
            <div>
            <img src="/risk.png" className='w-[100px] mx-auto mb-3' />
            <p className='font-bold text-lg'>Risk tolerance</p>
            </div>
            <div>
            <img src="/time.png" className='w-[100px] mx-auto mb-3' />
            <p className='font-bold text-lg'>Time horizon</p>
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