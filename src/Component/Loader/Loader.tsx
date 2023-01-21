import React from 'react'
import './Loader.scss'

interface Props {
  mode: string | null
}
function Loader({ mode }: Props) {
  return (
    <div className={mode === 'dark' ? 'loader' : 'loader light'}>
      <div className='container'>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
      </div>
    </div>
  )
}

export default Loader
