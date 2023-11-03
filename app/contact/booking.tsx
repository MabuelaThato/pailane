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
        message: "Please enter your email.",
      }),
    cell: z.string().min(10, {
      message: "Please enter your cellphone number",
    }),
    time: z.string().min(3, {
        message: "Please enter your email.",
      }),
    message: z.string().min(0).max(150),
  })

const Bookings = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            cell: "",
            time: "",
            message: "",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

      const [date, setDate] = React.useState<Date>()

  return (
    <div className='px-4 md:px-8 pt-10 md:pt-0 mb-6 md:mb-0'>
        <h2 className='text-2xl md:text-4xl font-bold mb-4'>Schedule a call</h2>
        <p className='mb-10'>
        Arrange a meeting that suits your schedule. Share your preferred meeting time, and we'll make it happen.
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
     
    <div className=''>
        <p className='text-sm font-medium mb-3'>Select a time and date</p>
        <div className='lg:grid lg:grid-cols-2 lg:space-x-2'>
       <FormField
          control={form.control}
          name="time"
          render={() => (
            <FormItem>
              <FormControl>
                <Select>
                    <SelectTrigger className="w-[230px] md:w-[250px] lg:w-[150px] mb-4 lg:mb-0">
                        <SelectValue placeholder="Time" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="12am" >12:00</SelectItem>
                        <SelectItem value="1pm">13:00</SelectItem>
                        <SelectItem value="2pm">14:00</SelectItem>
                        <SelectItem value="3pm">15:00</SelectItem>
                        <SelectItem value="4pm">16:00</SelectItem>
                        <SelectItem value="5pm">17:00</SelectItem>
                        <SelectItem value="6pm">18:00</SelectItem>
                        <SelectItem value="7pm">19:00</SelectItem>
                    </SelectContent>
                </Select>
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
                    "w-[230px] md:w-[250px] lg:w-[150px] justify-start text-left font-normal",
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
            </div>
      

        <Button type="submit" className=''>Submit</Button>
      </form>
    </Form>
  
    </div>
  )
}

export default Bookings