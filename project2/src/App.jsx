import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [user, setuser] = useState([])
  const [index, setindex] = useState(1)

  const getData = async () => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)

    setuser(res.data)
  }

  useEffect(function(){
    getData()
  }, [index])

  let printUserdata = <h3 className='text-white text-xs font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(user.length>0){
    printUserdata = user.map(function(el,id){

      return <div key={id}>
        
        <Card el={el}/>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen p-4 overflow-auto text-white'>
      
      <div className='flex flex-wrap gap-5 min-h-[500px] justify-center items-center'>
        {printUserdata}
      </div>

      <div className='flex gap-4 justify-center items-center p-4'>
        <button style={{ opacity: index == 1 ? 0.5 : 1}} className='bg-amber-400  text-black px-4 py-2 rounded cursor-pointer font-semibold active:scale-90'
        onClick={() => {
          if(index>1){
            setuser([])
            setindex(index-1)
          }
          
        }}>
          Prev</button>
        
        <h2>Page {index}</h2>
        <button className='bg-amber-400  text-black px-4 py-2 rounded cursor-pointer font-semibold active:scale-90'
        onClick={() => {
          setindex(index+1)
          setuser([])
        }}>
          Next</button>
      </div>
    </div>
  )
}

export default App