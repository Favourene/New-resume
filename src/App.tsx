import React, { useState, useEffect } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Portfolio from './Pages/Portfolio/Portfolio'
import Scroll from './Scroll'

function App() {
  const [mode, setMode] = useState<string | null>('')
  useEffect(() => {
    setMode(localStorage.getItem('mode'))
  }, [])

  return (
    <div className={mode === 'dark' ? 'App' : 'App light'}>
      <div className='AppBody'>
        <BrowserRouter>
          <Scroll />
          <Routes>
            <Route path='/' element={<Home setMode={setMode} mode={mode} />} />
            <Route
              path='/portfolio'
              element={<Portfolio setMode={setMode} mode={mode} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
