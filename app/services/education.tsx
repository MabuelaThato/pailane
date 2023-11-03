import { Badge } from '@/components/ui/badge'
import React from 'react'

const Education = () => {
  return (
    <div className='w-full mb-10' id='education'>
        <h1 className='text-2xl md:text-4xl font-black mb-6'>
            Education Planning  
        </h1>
        <p >
            Education is the cornerstone of your child’s future. I work with you as a parent, plan for and secure that future rather than leaving it to chance. 
            <br />
            <br />
            Education Planning involves two aspects: <span className='font-bold'>Investments</span> and <span className='font-bold'>Insurance</span>. 
        </p>
        <div className='pt-10'>
            <Badge className='text-lg md:text-xl p-1 px-3'>
                Investments
            </Badge>
            <span className='md:flex md:space-x-8 md:py-6'>
                <img src="/investment2.png" className='w-[100px] lg:w-[90px] mx-auto md:mx-0 my-6'/>
                <p>
                This entails investing your money for the purpose of saving for educational expenses, 
                from early development stage to tertiary education. 
                I help you set up a tailored investment plan based on your lifestyle, 
                circumstances, school preference for your child, time horizon and budget constraints, 
                in order to serve the financial requirements of your child’s education.  
                </p>
            </span>
        </div>
        <div className='pt-10'>
            <Badge className='text-lg md:text-xl p-1 px-3'>
            Insurance
            </Badge>
            <span className='md:flex md:space-x-8 md:py-6'>
                <img src="/education2.png" className='w-[100px] lg:w-[90px] mx-auto md:mx-0 my-6' />
                <p>
                While providing for and investing for your child’s education, 
                unforeseen circumstancess associated with death, disability or critical illness could arise.
                Planning for these events means you secure and provide for your child’s future even when you 
                are unable to, through education insurance.
                </p>
            </span>
        </div>
    </div>
  )
}

export default Education