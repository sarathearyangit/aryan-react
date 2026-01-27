import { useNavigate } from 'react-router-dom'

const Navbar1 = () => {

    const navi = useNavigate()

  return (
    <div className='bg-cyan-600'>
        <button onClick={()=>{
            navi('/')
        }} className='bg-amber-600 rounded text-white px-1 py-1 m-1 ml-4 cursor-pointer active:scale-95'>Return to home page</button>
        <button onClick={()=>{
            navi(-1)
        }} className='bg-amber-600 rounded text-white px-1 py-1 m-1 cursor-pointer active:scale-95'>Back</button>
        <button onClick={()=>{
            navi(+1)
        }} className='bg-amber-600 rounded text-white px-1 py-1 m-1 cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default Navbar1

//use navigate