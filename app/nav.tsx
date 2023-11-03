"use client"
import React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
    <div className='w-full shadow-md bg-[#F6F6F6] drop-shadow-lg'>
        <div className='p-5 md:px-6 lg:px-20 items-center flex justify-between'>
            <div><img src="/liberty.png" alt="" className='w-12 h-10 md:mr-8 lg:mr-10' /> </div>
            <div className='flex flex-cols-3 gap-4 md:gap-6 lg:gap-9 mr-4 md:mr-8 lg:mr-10 '>
                <Link href="/" className='hover:underline'>Home</Link>
                <Link href="/services" className='hover:underline'>Services</Link>
                <Link href="/contact" className='hover:underline'>Contact</Link>
              
            </div>
        </div>
        {/* <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Se
              </NavigationMenuLink>
            </Link>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Se
              </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> 
  */}
    </div>
  )
}

export default Navbar