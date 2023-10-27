import { Button } from '@/components/ui/button';
import { BsArrowRight } from "react-icons/bs";
import React from 'react';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section className="bg-[#F9F9F9] w-full bg">
      <div className='py-28 px-28'>
        <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-7xl'>
          <div>
            {/*<Badge className='bg-[#00164E] mb-6 text-white'>
              Trusted Financial Planning Services
            </Badge>*/}
          <h1 className='text-5xl lg:text-6xl font-black mb-8 text-white'>Financial Advisor for Your Success</h1>
          <p className='font-normal mb-12 text-white'>Your Trusted Partner for Wealth Management and Financial Planning.</p>
          <Button className='text-white bg-[#00164E] rounded'>
            <span className='mr-2'>Get Started</span> <BsArrowRight />
          </Button>
          </div>

          <div>
          
        </div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero