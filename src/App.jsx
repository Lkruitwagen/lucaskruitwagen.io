import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import BusinessCard from './components/BusinessCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='layout'>
        <BusinessCard />
    </div>
  )
}

export default App
