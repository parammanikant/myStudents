import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cild1 from './components/Cild1'

const nameContext = createContext();

function App() {
  
  return (
    <>
    <nameContext.Provider value='Patidar'>
      <Cild1 />
    </nameContext.Provider>
      
    </>
  )
}

export default App
export {nameContext}
