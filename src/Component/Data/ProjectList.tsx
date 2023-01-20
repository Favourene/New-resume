import University from '../../Images/uniedu.netlify.app_(Desktop - Large).png'
import BookHome from '../../Images/bookhomes.netlify.app_(Desktop - Large).png'
import Ounje from '../../Images/ounjebazaar.netlify.app_(Desktop - Large).png'
import TheVenue from '../../Images/venue2.netlify.app_(Desktop - Large).png'
import Zogin from '../../Images/zogin.netlify.app_(Desktop - Large).png'
import Vacation from '../../Images/vacationroom.netlify.app_(Desktop - Large).png'
import Revent from '../../Images/reventtest.netlify.app_(Desktop - Large).png'
import Salvation from '../../Images/salvationhope.netlify.app_index.html(Desktop - MDPI).png'
import { RiCustomerService2Fill } from 'react-icons/ri'
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  // SiTailwindcss,
  SiSass,
  SiGithub,
  SiRedux,
  SiStripe,
  SiStyledcomponents,
  SiMaterialui,
} from 'react-icons/si'

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
    name: 'Revent Tech',
    description:
      'TThe website, built using React and SCSS, is a sleek and professional representation of a tech innovation company. The design is pixel perfect, ensuring that all elements are sharp and crisp on any device.The layout is clean and easy to navigate, with a focus on showcasing the companys innovative products and services.',
    image: Revent,
    code: 'https://github.com/Favourene/React-Test',
    live: 'https://reventtest.netlify.app/',
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
  {
    name: 'Vacation Room',
    description:
      'Vacation Room is an online booking platform that helps travelers find unique accommodation options in the world’s most beautiful destinations. With Vacation Room, users can browse through a wide selection of room types, amenities, and additional services to create the perfect vacation. Vacation Room offers unique lodging experiences at unbeatable prices.',
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
  {
    name: 'Salvation Hope',
    description:
      'Salvation Hope is a simple and cleanly designed website built using HTML and CSS. The website features a homepage that displays a full-screen background image with a navigation menu fixed to the top of the page. The navigation menu includes links to various pages such as "Home", "About Us", "Contact Us", and "Donate".',
    image: Salvation,
    code: 'https://github.com/Favourene/Salvation',
    live: 'https://salvationhope.netlify.app/',
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
]

export default Projects
