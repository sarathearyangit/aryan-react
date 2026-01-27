import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-cyan-900 justify-between text-xl font-bold px-4 py-4'>
        <h2>Balaji food line</h2>
        <div className='flex gap-8'>

          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
          <Link to='/courses'>Courses</Link>
          
        </div>
    </div>
  )
}

export default Navbar