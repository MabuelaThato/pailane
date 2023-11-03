
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { cn } from '@/lib/utils'
  

const Services = () => {
  return (
    <div className='bg-[#F6F6F6]'>
        <div className='bg-white m-4 md:m-12 lg:m-24 rounded-xl text-center p-3 md:p-10 lg:p-20 py-14 drop-shadow-2xl'>
            <h1 className='text-2xl md:text-4xl font-black mb-6'>Services</h1>
            <p className='mb-8 font-medium'>
            I provide clear insights and expert advice to boost your success.
            I am dedicated to helping you achieve your best, offering a full spectrum of services including:
            </p>

            <div className='md:grid md:grid-cols-3 md:gap-6'>
            <Card className='rounded-xl shadow-lg m-6 md:m-0 '>
                <CardHeader>
                    <img src="/retirement-plan.png" className='w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4' />
                    <CardTitle className='text-xl lg:text-3xl font-black'>Retirement Planning</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                    Strategic management of your finances and investments
                     to ensure a comfortable and financially secure retirement.
                    </p>
                </CardContent>
                <CardFooter className='mt-2'>
                <Button asChild className= 'mx-auto bg-[#00164E] text-white md:mt-12 lg:mt-4 xl:mt-6'>
                        <Link href="/services#retirement">
                            Learn More
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
            <Card className='rounded-xl shadow-lg m-6 md:m-0 '>
                <CardHeader>
                    <img src="/education.png" className='w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4' />
                    <CardTitle className='text-xl lg:text-3xl font-black'>Education Planning</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Education is the cornerstone of your child’s future. We work with you as a parent, plan for and secure that future rather than leaving it to chance. </p>
                </CardContent>
                <CardFooter className='mt-2'>
                    <Button asChild  className= 'mx-auto bg-[#00164E] text-white lg:mt-2'>
                        <Link href="/services#education">
                            Learn More
                        </Link>
                    </Button>
                </CardFooter>
            </Card>

            <Card className='rounded-xl shadow-lg m-6 md:m-0 '>
                <CardHeader>
                    <img src="/investment.png" className='w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4' />
                    <CardTitle className='text-xl lg:text-3xl font-black'>Long-Term Investment</CardTitle>
                </CardHeader>
                <CardContent>
                    <p> If your financial ambitions involve growing your capital to create lasting wealth, say no more.</p>
                </CardContent>
                <CardFooter className='mt-2'>
                    <Button asChild  className= 'mx-auto bg-[#00164E] text-white md:mt-24 lg:mt-12 xl:mt-6 '>
                        <Link href="/services#investment">
                            Learn More
                        </Link>
                    </Button>
                </CardFooter>
            </Card>

            </div>
        </div>
    </div>
  )
}

export default Services