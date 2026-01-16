import React, { useState } from 'react'

const App = () => {

const [num, setNum] = useState(0)

  function increasenum(){
      setNum(num+1)
  }

  function decreasenum(){
      setNum(num-1)
  }

  function jumpby5(){
      setNum(num+5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increasenum}>Increase</button>
      <button onClick={decreasenum}>
      Decrease</button>
      <button onClick={jumpby5}>Increase by 5</button>
    </div>
  )
}

export default App