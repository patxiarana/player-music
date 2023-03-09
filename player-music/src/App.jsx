import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Player1 from './components/Player1'

function App() {

  return (
    <div className="App">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
          <Player1/>
      </div>
 
  )
}

export default App
