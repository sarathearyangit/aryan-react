import React from 'react'
import Rightcard from './Rightcard'


const Rightcont = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl overflow-x-auto p-6 w-2/3 flex flex-nowrap gap-10'>
        
        {props.users.map(function(el,id){

          return <Rightcard key={id} id={id} color={el.color} img={el.img} tag={el.tag}/>
        })}
    </div>
  )
}

export default Rightcont