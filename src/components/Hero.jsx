
"use client"
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
const Hero = () => {
  const router = useRouter()
  return (
    <div className=' w-full h-full   bg sm:p-0 p-10' id='home'>
        <div className='max-w-[1000px] m-auto flex items-center justify-center flex-col pt-[120px] sm:pt-[300px]'>

    
        <h1 className='text-lg  sm:text-vl font-semibold text-center mb-5 '>Wherever you go, let’s make it happen</h1>
       
        <Button className="" variant="custom" size="md" onClick={()=>router.push("#discover")}> 
            Discover the world 
        </Button>
        </div>
    </div>
  )
}

export default Hero