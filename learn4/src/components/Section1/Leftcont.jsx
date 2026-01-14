import React from 'react'
import { MoveUpRight } from 'lucide-react'

const Leftcont = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
      <div className='p-6'>

        <h3 className='mb-7 text-6xl font-bold'>Prospective <br /><span className='text-gray-500'>Customer</span><br />segmentation</h3>

        <p className='text-xl w-[90%] font-medium text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit consectetur maxime quidem temporibus totam molestiae magni architecto deleniti quam asperiores?</p>

      </div>
      <div className='text-9xl'><MoveUpRight /></div>
    </div>
  )
}

export default Leftcont