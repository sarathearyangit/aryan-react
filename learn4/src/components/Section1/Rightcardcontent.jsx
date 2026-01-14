import React from 'react'
import { ArrowRight } from 'lucide-react'

const Rightcardcontent = (props) => {
  return (
    <div className='h-full w-full absolute top-0 left-0 justify-between p-10 flex flex-col'>
        <h1 className='bg-white text-2xl font-semibold rounded-full justify-center items-center flex h-10 w-10'>{props.id+1}</h1>

        <div>
          <p className='text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nesciunt suscipit est modi, quaerat itaque.</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className='px-7 py-3 rounded-full font-medium'>{props.tag}</button>
                <button className='px-3 py-3 text-white rounded-full font-medium'><ArrowRight /></button>
          </div>
        </div>
    </div>
  )
}

export default Rightcardcontent