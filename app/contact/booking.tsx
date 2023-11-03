"use client"
import React from 'react'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 import axios from 'axios'
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from '@/components/ui/label'
 
const formSchema = z.object({
    fullName: z.string().min(3, {
        message: "Please enter your full name.",
      }),
    cell: z.string().min(10, {
      message: "Please enter your cellphone number",
    }),
    email: z.string().min(10, {
      message: "Please enter your email",
    }),
    time: z.string().min(0),
    method: z.string().min(0),
  })

const Bookings = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            cell: "",
            email: "",
            time: "",
            method: "",
        },
      })

      const [date, setDate] = React.useState<Date>()

     async function onSubmit(values: z.infer<typeof formSchema>) {
        const data = {
          service_id: 'service_vi8loqv',
          template_id: 'template_6o4uztm',
          user_id: 'RSDwXqQkjUZrYQIvd',
          template_params: {
              from_name: values.fullName,
              contact_number: values.cell,
              from_email: values.email,
              time: values.time,
              date: date,
              method: values.method
          }
      };
      
    try {
        const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data)
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }

      }
   

  return (
    <div className='px-4 md:px-8 pt-10 md:pt-0 mb-6 md:mb-0'>
        <h2 className='text-2xl md:text-4xl font-bold mb-4'>Schedule a call</h2>
        <p className='mb-10'>
        Arrange a meeting that suits your schedule. Share your preferred meeting time, and I'll make it happen.
        </p>
         <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className=''/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cell"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cellphone Number</FormLabel>
              <FormControl>
                <Input placeholder="0123456789" {...field} className=''/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="john@doe.com" {...field} className=''/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />  
     
    <div className=''>
        <p className='text-sm font-medium mb-3'>Select a time and date</p>
        <div className='lg:grid lg:grid-cols-2 lg:space-x-2'>
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Choose a time between 10am-5pm " {...field} className=''/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />  

      
        <Popover>
            <PopoverTrigger asChild>
                <Button
                variant={"outline"}
                className={cn(
                    "w-[230px] md:w-[250px] lg:w-[200px] justify-start text-left font-normal mt-4 lg:mt-0",
                    !date && "text-muted-foreground"
                )}
                >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                />
            </PopoverContent>
            </Popover>
        
            </div>
    
            <FormField
          control={form.control}
          name="method"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred method of communication</FormLabel>
              <FormControl>
                <Input placeholder="Call, Zoom, Teams.." {...field} className=''/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />  
            </div>
      

        <Button type="submit" className=''>Submit</Button>
      </form>
    </Form>
  
    </div>
  )
}

export default Bookings