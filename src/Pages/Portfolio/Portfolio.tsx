import React, { useEffect } from 'react'
import './Portfolio.scss'
import NavBar from '../../Component/NavBar/NavBar'
import { GiShipWheel, GiMoon } from 'react-icons/gi'
import { FaSun, FaEye } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import Projects from '../../Component/Data/ProjectList'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface Props {
  mode: string | null
  setMode: React.Dispatch<React.SetStateAction<string | null>>
}
function Portfolio({ mode, setMode }: Props) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className={mode === 'dark' ? 'portfolio' : 'portfolio light'}>
      <NavBar mode={mode} setMode={setMode} location='portfolio' />
      <div className='projects'>
        <div className='darkMode'>
          {mode === 'dark' ? (
            <FaSun
              title='Switch to Light mode'
              onClick={() => {
                localStorage.setItem('mode', 'light')
                setMode('light')
              }}
            />
          ) : (
            <GiMoon
              title='Switch to Dark mode'
              onClick={() => {
                localStorage.setItem('mode', 'dark')
                setMode('dark')
              }}
            />
          )}
        </div>
        <div className='top'>
          <h1>
            <GiShipWheel /> Projects
          </h1>
          <p>Some of my notable Projects</p>
        </div>
        <div className='wrap'>
          {Projects.map((item) => (
            <div
              className='card'
              key={item.name}
              data-aos='fade-up'
              data-aos-duration='3000'
            >
              <div className='image'>
                <img src={item.image} alt='' />
              </div>
              <div className='codes'>
                {item.languages.map((item) => (
                  <item.icon title={item.name} key={item.name} />
                ))}
              </div>
              <div className='name'>
                <h1>{item.name}</h1>
              </div>
              <div className='description'>
                <p>{item.description}</p>
              </div>
              <div className='live'>
                <a href={item.code}>
                  <SiGithub title='Code' />
                </a>
                <a href={item.live}>
                  <FaEye title='Live' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
