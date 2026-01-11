import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Shyam' age={20} img="https://images.unsplash.com/photo-1738168299283-4117c3dfb8ac?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"
      />
      <Card user='Aryan' age={30} img="https://plus.unsplash.com/premium_photo-1757914024397-8dfdb7756af1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"/>
      <Card user='Aditya' age={22} img="https://plus.unsplash.com/premium_photo-1765164894633-a9a920ee08b1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
    </div>
  )
}

export default App
