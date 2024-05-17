

import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Discover = () => {
  return (
    <div className='bg-background p-10 sm:p-40 relative -z-20' id='discover'>
        <h2 className='text-md sm:text-vl font-semibold text-white mb-5 w-full sm:w-[1000px] z-20'>
        Discover Your Dream Destinations Today!
        </h2>
        <Image src={'/plane.png'} height={650} width={650} className='-z-10 top-0 hidden sm:block  left-0 right-0 bottom-0 h-full  absolute sm:top-0 sm:left-auto  sm:right-[20%]'/>
        <Button className="  " variant="discover" size="lg">
            Discover The World
        </Button>
    </div>
  )
}

export default Discover