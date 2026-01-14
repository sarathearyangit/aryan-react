import React from 'react'
import Leftcont from './Leftcont'
import Rightcont from './Rightcont'


const Page1cont = (props) => {
  return (
    <div className='pb-16 pt-6 flex items-center gap-10 h-[85vh] px-18'>
        <Leftcont />
        <Rightcont users={props.users}/>
    </div>
  )
}

export default Page1cont