import React, { useEffect, useState } from 'react'
import './Home.scss'
import NavBar from '../../Component/NavBar/NavBar'
import { Link } from 'react-router-dom'
import HeroImage from '../../Images/DrawKit Vector Illustration Project Manager (9) (1).png'
import BulbImage from '../../Images/DrawKit Vector Illustration Project Manager (15).png'
import { FaSun, FaEye, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { GiMoon } from 'react-icons/gi'
import { HiMail } from 'react-icons/hi'
import { RiInstagramFill } from 'react-icons/ri'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import { SiGithub } from 'react-icons/si'
import Projects from '../../Component/Data/ProjectList'
import Loader from '../../Component/Loader/Loader'

interface Props {
  mode: string | null
  setMode: React.Dispatch<React.SetStateAction<string | null>>
}
function Home({ mode, setMode }: Props) {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    if (localStorage.getItem('mode') === null) {
      localStorage.setItem('mode', 'dark')
      setMode('')
    } else {
      setMode(localStorage.getItem('mode'))
    }
    setTimeout(() => {
      setLoader(false)
    }, 5000)
    // eslint - disable - next - line
  }, [])
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  useEffect(() => {
    let tl = gsap.timeline({ default: { ease: 'power4.inOut', duration: 7 } })
    tl.to('.big', {
      'clip-path': 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
      opacity: 1,
      y: 0,
      duration: 7.3,
    })
      .to(
        '.sty',
        {
          'clip-path': 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
          opacity: 1,
          y: 0,
          duration: 2.2,
        },
        '-=2'
      )
      .to(
        '.tag, .resume',
        {
          'clip-path':
            'polygon(0 100%, 0 100%, 8% 100%, 46% 100%, 84% 100%, 100% 100%, 100% 100%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0 100%);',
          opacity: 1,
          y: 0,
          duration: 2.2,
        },
        '-=2'
      )
  }, [])

  const SkillList = [
    'React',
    'Vue',
    'TypeScript',
    'Next Js',
    'Node Js',
    'Express JS',
    'REST API',
    'Mongo DB',
    'Redux',
    'Context API',
    'HTML',
    'Javascript',
    'SASS',
    'Material UI',
    'Styled Component',
    'CSS',
    'Bootstrap',
    'Tailwind',
    'Gsap',
    'Ionic Framework',
    'React Native',
  ]

  return (
    <div className={mode === 'dark' ? 'home' : 'home light'}>
      {loader && <Loader mode={mode} />}
      <NavBar mode={mode} setMode={setMode} location='home' />
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
      <section id='a' className='hero'>
        <div className='left'>
          <div className='wrapper'>
            <h3 className='tag'>SENIOR FRONT-END DEVELOPER</h3>
            <h1 className='big'>I'm Igbinosa Iwinosa</h1>
            <a
              href='https://docs.google.com/document/d/1bv5tqgUHtTSu_uqvjesCqiQNNEqgS0ls/edit?usp=sharing&ouid=107951640386272690957&rtpof=true&sd=true'
              target='_blank'
            >
              <button className='resume'>Resume</button>
            </a>
          </div>
        </div>
        <div className='right'>
          <img className='sty' src={HeroImage} alt='' />
        </div>
      </section>
      <section id='b' className='about'>
        <div className='about_wrapper'>
          <div className='right_one'>
            <img
              data-aos='fade-up'
              data-aos-anchor-placement='center-bottom'
              src={BulbImage}
              alt=''
            />
          </div>
          <div className='top'>
            <h1 data-aos-duration='1000' data-aos='fade-up-left'>
              I’m a Creative developer, who loves clean, simple & unique design.
            </h1>
            <div
              className='left'
              data-aos='fade-left'
              data-aos-offset='300'
              data-aos-easing='ease-in-sine'
            >
              <p>
                As a highly skilled Front-End Developer with a strong focus on
                process and performance, I have a track record of delivering
                state-of-the-art, user-friendly websites and applications. I
                take great pride in my work and strive to ensure that the
                projects I deliver are easy to use and contribute to the overall
                success of the organizations I work for. With experience in
                various tech industries, including Fintech, EduTech, and
                E-commerce, I am well-equipped to help scale up any organization
                through the development of high-quality websites and
                applications.
              </p>
              <div></div>
            </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className='top'>
            <h2>Skill Sets</h2>
          </div>
          <div className='right_two'>
            {SkillList.map((item, i) => (
              <div
                className='card'
                data-aos={(1 + i) % 2 === 0 ? 'fade-left' : 'fade-right'}
                data-aos-offset='300'
                data-aos-easing='ease-in-sine'
                key={item}
              >
                <p>{item}</p>
                <div className='line'></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='portfolio' id='d'>
        <div className='top'>
          <h2>Projects</h2>
          <Link to={'/portfolio'}>View all {'~~>'} </Link>
        </div>
        <div className='wrap'>
          {Projects.slice(0, 6).map((item) => (
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
                <p>
                  {item.description.length > 200
                    ? item.description.slice(0, 200) + '....'
                    : item.description}
                </p>
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
      <section id='e' className='contact'>
        <div className='top'>
          <h1 data-aos='fade-up' data-aos-duration='3000'>
            Do you have any Project? <span>Let’s Talk</span>
          </h1>
        </div>
        <div className='wrapper'>
          <a
            href='https://github.com/Favourene'
            data-aos='flip-up'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          >
            <p>Github</p>
            <FaGithubSquare />
          </a>
          <a
            href='mailto:igbinosaiwinosa01@gmail.com'
            data-aos='flip-up'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          >
            <p>Email</p>
            <HiMail />
          </a>
          <a
            href='https://www.linkedin.com/in/igbinosaiwinosa'
            data-aos='flip-up'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          >
            <p>LinkedIn</p>
            <FaLinkedin />
          </a>
          <a
            href='https://www.instagram.com/favoureneosas/'
            data-aos='flip-up'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          >
            <p>Instagram</p>

            <RiInstagramFill />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
