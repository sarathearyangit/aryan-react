import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')

  const [first, setfirst] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const Copyfi = [...first]
    
    Copyfi.push({title,details})
    setfirst(Copyfi)
    console.log(Copyfi)

    settitle('')
    setdetails('')
  }

  const deleteNote = (id) => {
    const copyfirst = [...first]
    copyfirst.splice(id,1)
    setfirst(copyfirst)
  }


  return (
    <div className='bg-black h-screen lg:flex text-white'>
      
      <form onSubmit={ (e) => {
        submitHandler(e)
      }} className='flex flex-col lg:w-1/2 p-10 items-start gap-5'>
        
          <h1 className='text-3xl font-bold'>Add notes</h1>
          <input className= 'border-2 w-full outline-none px-5 py-3 rounded font-medium' type="text" placeholder='Enter notes Heading' 
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
          />

          <textarea className= 'h-28 w-full outline-none border-2 px-5 py-3 rounded font-medium' type="text" placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setdetails(e.target.value)
          }}
          />
          <button className= 'bg-white active:bg-gray-500 w-full outline-none text-black px-5 py-3 rounded font-medium'>Add note</button>

      </form>
      <div className='p-10 lg:w-1/2'>

        <h1 className='text-3xl font-bold'>Recent notes</h1>
        <div className='mt-5 gap-10 flex flex-wrap items-start justify-start h-[90%] overflow-auto'>
          {first.map(function(el,id){

            return <div key={id} className="flex justify-between flex-col relative items-start h-52 pt-9 pb-4 px-4 w-40 bg-cover rounded-xl text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{el.title}</h3>
                <p className='leading-tight text-xs font-semibold text-gray-600 mt-4'>{el.details}</p>
              </div>

              <button onClick={() => {
                deleteNote(id)
              }} className='rounded cursor-pointer active:scale-95 w-full py-1 font-bold text-xs text-white bg-red-500'>Delete</button>
            </div>
          })}
                
        </div>

      </div>
    </div>
  )
}

export default App
