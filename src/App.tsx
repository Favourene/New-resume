import React, { useState, useEffect } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

function App() {
  const [mode, setMode] = useState<string | null>('')
  useEffect(() => {
    setMode(localStorage.getItem('mode'))
  }, [])

  return (
    <div className={mode === 'dark' ? 'App' : 'App light'}>
      <div className='AppBody'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home setMode={setMode} mode={mode} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
