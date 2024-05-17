



import React from 'react'

const LayoutGrid = () => {
  return (
    <div>
 <div class='grid  grid-cols-1 sm:grid-cols-3 gap-10 p-10 sm:p-0'>
 <div class='relative overflow-hidden col-span-1 sm:col-span-2 group'>
    <div class='bg-red-500 w-full rounded-2xl oneBg transform scale-100 transition-transform duration-300 hover:scale-110'></div>
    <div class='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        <div class='bg-black bg-opacity-50 rounded-2xl absolute inset-0'></div>  
        <div class='text-white font-semibold text-center z-10'> 
          Amsterdam
        </div>
    </div>
</div>

    <div class='relative overflow-hidden group  col-span-1 sm:col-span-1 '>
    <div class='bg-red-500 w-full rounded-2xl twoBg transform scale-100 transition-transform duration-300 hover:scale-110'></div>
        <div class='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <div class='bg-black bg-opacity-50  rounded-2xl  absolute inset-0'></div>  
            <div class='text-white font-semibold text-center z-10'>  
                Singapore
            </div>
        </div>
    </div>
    <div class='relative overflow-hidden group col-span-1 sm:col-span-1'>
    <div class='bg-red-500 w-full rounded-2xl threeBg transform scale-100 transition-transform duration-300 hover:scale-110'></div>
        <div class='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <div class='bg-black bg-opacity-50 rounded-2xl   absolute inset-0'></div>  
            <div class='text-white font-semibold text-center z-10'>  
                Switzerland
            </div>
        </div>
    </div>
    <div class='relative overflow-hidden group col-span-1 sm:col-span-2'>
    <div class='bg-red-500 w-full rounded-2xl fourBg transform scale-100 transition-transform duration-300 hover:scale-110'></div>
        <div class='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <div class='bg-black bg-opacity-50  rounded-2xl  absolute inset-0'></div>  
            <div class='text-white font-semibold text-center z-10'>  
                Norway
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default LayoutGrid