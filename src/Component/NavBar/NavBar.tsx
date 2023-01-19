import React, { useState } from 'react'
import './NavBar.scss'
import Logo from '../../Images/logo.png'
import Logo2 from '../../Images/logo2.png'
import { FaBars, FaTimes } from 'react-icons/fa'

interface Props {
  mode: string | null
  setMode: React.Dispatch<React.SetStateAction<string | null>>
}
function NavBar({ mode, setMode }: Props) {
  const [handleToggle, setHandleToggle] = useState<string | boolean>('false')
  return (
    <div
      className={handleToggle ? 'navBar' : 'navBar collapse'}
      id={mode === 'dark' ? '' : 'light'}
    >
      <div className='nav-menu'>
        <div className='logo'>
          <img className='img1' src={mode === 'dark' ? Logo : Logo2} alt='' />
        </div>
        <div className='toggle-icon'>
          <div className='menu-icon'>
            {handleToggle ? (
              <FaBars
                className='drop-icon'
                onClick={() => setHandleToggle(!handleToggle)}
              />
            ) : (
              <FaTimes
                className=' drop-icon times'
                onClick={() => setHandleToggle(!handleToggle)}
              />
            )}
          </div>
        </div>
        <div className='nav-list'>
          <div className='nav-row'>
            <a className='list' href='#a'>
              Home
            </a>
            <a href='#b' className='list'>
              About Me
            </a>
            <a href='#d' className='list'>
              Projects
            </a>
            <a href='#e' className='list'>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
