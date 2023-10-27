
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
        <div className='bg-white m-24 rounded-xl text-center p-20 pt-14 drop-shadow-2xl'>
            <h1 className='text-4xl font-black mb-6'>Services</h1>
            <p className='mb-8 font-medium'>
            We provide clear insights and expert advice to boost your success.
            We're dedicated to helping you achieve your best, offering a full spectrum of services including:
            </p>

            <div className='grid grid-cols-3 gap-6'>
            <Card className='rounded-xl shadow-lg'>
                <CardHeader>
                    <img src="/retirement-plan.png" className='w-20 h-20 mx-auto mb-4' />
                    <CardTitle className='text-3xl font-bold'>Retirement Planning</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                    Strategic management of your finances and investments
                     to ensure a comfortable and financially secure retirement.
                    </p>
                </CardContent>
                <CardFooter className='mt-2'>
                <Button asChild className= 'mx-auto bg-[#00164E] text-white mt-6'>
                        <Link href="/retirement">
                            Learn More
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
            <Card className='rounded-xl shadow-lg'>
                <CardHeader>
                    <img src="/education.png" className='w-20 h-20 mx-auto mb-4' />
                    <CardTitle className='text-3xl font-bold'>Education Planning</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Education is the cornerstone of your child’s future. We work with you as a parent, plan for and secure that future rather than leaving it to chance. </p>
                </CardContent>
                <CardFooter className='mt-2'>
                    <Button asChild  className= 'mx-auto bg-[#00164E] text-white'>
                        <Link href="/education">
                            Learn More
                        </Link>
                    </Button>
                </CardFooter>
            </Card>

            <Card className='rounded-xl shadow-lg'>
                <CardHeader>
                    <img src="/investment.png" className='w-20 h-20 mx-auto mb-4' />
                    <CardTitle className='text-3xl font-bold'>Long-Term Investment</CardTitle>
                </CardHeader>
                <CardContent>
                    <p> If your financial ambitions involve growing your capital to create lasting wealth, say no more.</p>
                </CardContent>
                <CardFooter className='mt-2'>
                    <Button asChild  className= 'mx-auto bg-[#00164E] text-white mt-12'>
                        <Link href="/education">
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