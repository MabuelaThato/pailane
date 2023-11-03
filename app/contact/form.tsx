"use client"
import React from 'react'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { useRouter } from 'next/navigation'
 
const formSchema = z.object({
    fullName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Please enter your email.",
      }),
    message: z.string().min(0).max(150),
  })

const ContactForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          fullName: "",
          email: "",
          message: "",
        },
      })
      const router = useRouter()
      async function onSubmit(values: z.infer<typeof formSchema>) {

        const data = {
          service_id: 'service_vi8loqv',
          template_id: 'template_4txznrf',
          user_id: 'RSDwXqQkjUZrYQIvd',
          template_params: {
              from_name: values.fullName,
              from_email: values.email,
              message: values.message
          }
      };

      try {
        const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send',data)
        console.log(res.data)
        router.push("/")
      } catch (error) {
        console.error(error)
      }

      }

  return (
    <div className='px-4 md:px-6 mt-6 md:mt-0'>
        <h2 className='text-2xl md:text-4xl font-bold mb-4'>Send us a message</h2>
        <p className='mb-10'>If you have any quiries, 
        feel free to reach out by sending me an email using the form provided below.
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@gmail.com" {...field}  className='focus:outline-none'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input placeholder="" {...field}  className='focus:outline-none'/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className=''>Submit</Button>
      </form>
    </Form>
  
    </div>
  )
}

export default ContactForm