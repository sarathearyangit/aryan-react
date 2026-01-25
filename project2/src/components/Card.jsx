import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.el.url} target='_blank'>
          <div className='h-40 w-44 bg-white overflow-hidden rounded-xl'>
            <img className='h-full w-full object-cover' src={props.el.download_url} alt="" />
          </div>
          <h2 className='text-lg font-bold'>{props.el.author}</h2>
        </a>
    </div>
  )
}

export default Card