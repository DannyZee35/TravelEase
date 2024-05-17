
"use client"
import React from 'react'
import LayoutGrid from './LayoutGridDemo'
import useMediaQuery from '@/hooks/useMediaQuery';
import MobileGrid from './MobileGrid';

const Destinations = () => {

  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div className='max-w-[1200px] m-auto' id='destinations'>
        <h1 className='font-semibold text-md sm:text-left text-center'>Popular Destinations</h1>
        <div className='mt-10'>
        {isMobile ? (
               <MobileGrid/>


      ) : (
          <LayoutGrid/>
        )}
        
         </div>
    </div>
  )
}

export default Destinations