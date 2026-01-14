import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div
    className='shrink-0 h-full overflow-hidden relative w-80 rounded-4xl'>
        <img className='h-full w-full object-cover'
        src={props.img} alt="" />
    
        <Rightcardcontent id={props.id} color={props.color} tag={props.tag}/>

    </div>
  )
}

export default Rightcard