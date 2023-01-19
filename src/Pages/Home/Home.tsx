import React, { useEffect } from 'react'
import './Home.scss'
import NavBar from '../../Component/NavBar/NavBar'
import HeroImage from '../../Images/DrawKit Vector Illustration Project Manager (9) (1).png'
import BulbImage from '../../Images/DrawKit Vector Illustration Project Manager (15).png'
import { FaSun, FaEye, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { GiMoon } from 'react-icons/gi'
import { HiMail } from 'react-icons/hi'
import { RiInstagramFill } from 'react-icons/ri'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import { RiCustomerService2Fill } from 'react-icons/ri'
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiGithub,
  SiRedux,
  SiStripe,
  SiStyledcomponents,
  SiMaterialui,
} from 'react-icons/si'
import University from '../../Images/uniedu.netlify.app_(Desktop - Large).png'
import BookHome from '../../Images/bookhomes.netlify.app_(Desktop - Large).png'
import Ounje from '../../Images/ounjebazaar.netlify.app_(Desktop - Large).png'
import TheVenue from '../../Images/venue2.netlify.app_(Desktop - Large).png'
import Zogin from '../../Images/zogin.netlify.app_(Desktop - Large).png'
import Vacation from '../../Images/vacationroom.netlify.app_(Desktop - Large).png'

interface Props {
  mode: string | null
  setMode: React.Dispatch<React.SetStateAction<string | null>>
}
function Home({ mode, setMode }: Props) {
  useEffect(() => {
    if (localStorage.getItem('mode') === null) {
      localStorage.setItem('mode', 'dark')
      setMode('')
    } else {
      setMode(localStorage.getItem('mode'))
    }
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  useEffect(() => {
    let tl = gsap.timeline({ default: { ease: 'power4.inOut', duration: 2 } })
    tl.to('.big', {
      'clip-path': 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
      opacity: 1,
      y: 0,
      duration: 2.2,
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
    'TypeScript',
    'Next Js',
    'REST API',
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
  ]
  const Projects = [
    {
      name: 'Book Home',
      description:
        'Book Home is a modern e-commerce platform that allows customers to browse and purchase books online. Built using React as the frontend framework and Commerce.js as the e-commerce platform, the website offers a user-friendly interface and a seamless shopping experience.',
      image: BookHome,
      code: 'https://github.com/Favourene/bookhome',
      live: 'https://ounjebazaar.netlify.app/',
      languages: [
        {
          name: 'React',
          icon: SiReact,
        },
        {
          name: 'Scss',
          icon: SiSass,
        },
        {
          name: 'Context API',
          icon: SiRedux,
        },
        {
          name: 'Stripe API',
          icon: SiStripe,
        },
      ],
    },
    {
      name: 'Ounje Bazaar',
      description:
        'Ounjebazaar is an online international grocery store based out of New Brunswick, Canada. It makes it easy to get fresh, hard-to-find international groceries delivered right to your door.Ounjebazaar has leveraged the features of great SEO techniques to make their site blazing fast and easy to navigate. ',
      image: Ounje,
      code: '',
      live: 'https://ounjebazaar.netlify.app/',
      languages: [
        {
          name: 'React',
          icon: SiReact,
        },
        {
          name: 'SCSS',
          icon: SiSass,
        },
        {
          name: 'Styled components',
          icon: SiStyledcomponents,
        },
        {
          name: 'Material Ui',
          icon: SiMaterialui,
        },
        {
          name: 'Context API',
          icon: SiRedux,
        },
        {
          name: 'Stripe API',
          icon: SiStripe,
        },
      ],
    },
    {
      name: 'The Venue',
      description:
        'The Venue is a restaurant website designed for a fictional restaurant called "The Venue". It was built using HTML, CSS, and JavaScript. The website features a clean, modern design with a responsive layout that adapts to different screen sizes.The website also includes a chat feature that allows users to communicate with a customer service representative in real-time',
      image: TheVenue,
      code: '',
      live: 'https://venue2.netlify.app/',
      languages: [
        {
          name: 'HTML',
          icon: SiHtml5,
        },
        {
          name: 'CSS',
          icon: SiCss3,
        },
        {
          name: 'Javascript',
          icon: SiJavascript,
        },
        {
          name: 'Twak.io',
          icon: RiCustomerService2Fill,
        },
      ],
    },
    {
      name: 'Zogin',
      description:
        'The website is a single-page application that provides information about yoga and allows users to view different yoga poses. The website makes use of HTML, CSS, and JavaScript to create a visually appealing and interactive experience for users. ',
      image: Zogin,
      code: 'https://github.com/Favourene/zogin',
      live: 'https://zogin.netlify.app/',
      languages: [
        {
          name: 'HTML',
          icon: SiHtml5,
        },
        {
          name: 'CSS',
          icon: SiCss3,
        },
        {
          name: 'Javascript',
          icon: SiJavascript,
        },
      ],
    },
    {
      name: 'Vacation Room',
      description:
        'Vacation Room is an online booking platform that helps travelers find unique accommodation options in the world’s most beautiful destinations. With Vacation Room, users can browse through a wide selection of room types, amenities, and additional services to create the perfect vacation. From beachfront villas and luxury apartments to cozy cabins and chic hostels, Vacation Room offers unique lodging experiences at unbeatable prices. With secure payments and 24/7 customer support, Vacation Room is the go-to resource for travelers looking for the perfect holiday getaway.',
      image: Vacation,
      code: 'https://github.com/Favourene/Vacation-Rental',
      live: 'https://vacationroom.netlify.app/',
      languages: [
        {
          name: 'HTML',
          icon: SiHtml5,
        },
        {
          name: 'CSS',
          icon: SiCss3,
        },
        {
          name: 'Javascript',
          icon: SiJavascript,
        },
      ],
    },
    {
      name: 'University Website',
      description:
        'The React and SCSS website I built is for a fictional university. It features a clean and modern design with a focus on usability. The homepage includes a carousel of featured events and a section for recent news updates.',
      image: University,
      code: 'https://github.com/Favourene/education',
      live: 'https://uniedu.netlify.app/',
      languages: [
        {
          name: 'React',
          icon: SiReact,
        },
        {
          name: 'Scss',
          icon: SiSass,
        },
        {
          name: 'Context API',
          icon: SiRedux,
        },
      ],
    },
  ]

  return (
    <div className={mode === 'dark' ? 'home' : 'home light'}>
      <NavBar mode={mode} setMode={setMode} />
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
              href='https://docs.google.com/document/d/1Xhf-rEWhsHxNknBUWWzFu6KfYTB6_jfgDzQfUXOG_Tw/edit?usp=sharing'
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
