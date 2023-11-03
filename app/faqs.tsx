import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Badge } from '@/components/ui/badge'
  

const FAQS = () => {
  return (
    <div className='p-10 text-center bg-[#F6F6F6] w-full'>
         <h1 className='text-xl md:text-4xl font-black text-center p-2 md:p-4'>Frequently Asked Questions</h1>
         <p className='p-4 px-2 md:px-12 font-medium'>
            Have questions? We've got answers to some of the most frequently asked questions.
            <br />
            Also, feel free to reach out to us via email or phone,
            and we'll gladly offer you the information you need.
        </p>

        <div className='p-4 md:p-8 px-2 md:px-12 lg:px-32 '>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='text-xl hover:no-underline'>
                When should I start planning for my retirement?
                </AccordionTrigger>
                <AccordionContent className='text-base text-left py-2'>
                It’s never too early to start planning for retirement. 
                The earlier you begin, the more time your investments have to grow. 
                However, it’s also important to review and adjust your retirement plan as your circumstances change over time.
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='text-xl hover:no-underline'>
                    Why is Education Planning important?
                </AccordionTrigger>
                <AccordionContent className='text-base text-left py-2'>
                Education Planning is crucial as it helps you financially prepare for your child’s educational journey. 
                It ensures that you have the necessary funds and provisions available to support their educational aspirations in both foreseen and unforeseen events.
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='text-xl hover:no-underline'>
                    How much return can I expect on my investments?
                </AccordionTrigger>
                <AccordionContent className='text-base text-left py-2'>
                The return on your investments can vary based on the type of investment, market conditions, and your risk tolerance. 
                Generally, long-term investments tend to yield higher returns, although they come with inherent market risk. 
                Our team will work with you to design an investment strategy tailored to your risk profile and financial objectives.
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className='text-xl hover:no-underline'>
                Is my personal and financial information kept confidential?
                </AccordionTrigger>
                <AccordionContent className='text-base text-left py-2'>
                Absolutely. We take data privacy seriously. 
                All your personal and financial information is handled with the most confidentiality and is only used to tailor our services to your needs.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>

    </div>
  )
}

export default FAQS