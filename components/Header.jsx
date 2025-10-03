"use client"

import {Unauthenticated,Authenticated} from 'convex/react'
import { useStoreUser } from '@/hooks/useStoreUser'
import { SignedOut,SignInButton,SignUpButton,SignedIn ,UserButton} from '@clerk/nextjs'
import React from 'react'
import { BarLoader } from 'react-spinners'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { LayoutDashboard, User } from 'lucide-react'


const Header = () => {

  const {isLoading} =useStoreUser();
  const path= usePathname();




  return (
    <header className='fixed top-0 w-full border-b bg-white/95 z-50 backdrop:blur supports-[backdrop-filter]:bg-white/60'>
      <nav className='container mx-auto flex items-center justify-between p-4'>
        <Link href="/" className="flex items-center gap-2">
        <Image src={"/logos/logo.png"}
         alt="Splitr Logo" 
        width={60} height={200} className='mr-2'/>
         </Link>
       

{path==="/" && (
  <div className='hidden md:flex items-center gap-6'>
    <Link href={"#features"} 
    className='text-sm font-medium hover: text-green-600 transition'>
      Features
    </Link>

      <Link href={"#how-it-works"} 
    className='text-sm font-medium hover: text-green-600 transition'>
      How It Works
    </Link>
    
  </div>
)}


<div className='flex items-center gap-4'>



  <Authenticated>
    <Link href="/dashboard" >
    <Button variant={"outline"} className='hidden md:inline-flex items-center gap-2 hover:text-green-600 hover:border-green-600 transition'>
    <LayoutDashboard className='h-4 w-4 '/>Dashboard
    </Button>


    

     <Button variant={"outline"} className='md:hidden h-10 w-10 p-0'>
    <LayoutDashboard className='h-4 w-4'/>
    </Button>


  <UserButton />

    

    </Link>



 
  </Authenticated>
  <Unauthenticated>
    <SignInButton>
      <Button variant={"ghost"}>Sign In</Button>
    </SignInButton>

     <SignUpButton>
      <Button className="bg-green-600 hover:bg-green-700">
      GetStarted</Button>
    </SignUpButton>

  </Unauthenticated>
</div>

            </nav> 

            {isLoading && <BarLoader width='100%' color='#2563eb'/>}
    </header>
  )
}

export default Header
