import { React, useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Items from './components/Items'
import Orders from './components/Orders'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Items />
     <Orders/>
    

       
    </>
  )
}

export default App
