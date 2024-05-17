

import { Clock } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Trips = ({text,description,price,days,image}) => {
  return (
    <div className='w-[400px]' id='trips'>
        <Image src={image} height={400} width={400} className='mb-5 h-[300px] w-[400px] rounded-xl transform scale-100 transition-transform duration-300 hover:scale-110'/>
        <div className='flex flex-col gap-5 p-5'>
            <h2 className='font-semibold text-nm'>{text}</h2>
            <p className='text-sm'>{description}</p>
            <hr />
            <div className='flex items-center justify-between'>
            <p className='text-nm'>{price}</p>
            <p className='text-sm bg-light rounded-full p-2 px-5'><Clock className='mr-5  h-5 w-5 inline-block'/>{days}</p>
            </div>
        </div>
    </div>
  )
}

export default Trips