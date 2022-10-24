import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import LogoFirstTitle from '../../assets/images/V_logo.png'
import LogoSecondTitle from '../../assets/images/S_logo.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const firstNameArray = ['i', 'k', 't', 'o', 'r', 'i', 'j', 'a']
  const secondNameArray = ['e', 'l', 'i', 'o', 'k', 'a', 'i', 't','e']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className='container home-page'>
        <div className='text-zone'>
					<h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
					<img className='logo-v' src={LogoFirstTitle} alt='Developer Name' />
					<AnimatedLetters 
            letterClass={letterClass}
            strArray={firstNameArray}
            idx={15} />          
          <img className='logo-s' src={LogoSecondTitle} alt='Developer Last Name' />
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={secondNameArray}
            idx={24} /> 
					</h1>
					<h2>Software Engineer <span class='dash'>/</span> Frontend Developer</h2>
					<Link to='/contact' className='contact-button'>CONTACT ME</Link>
				</div>
    </div>

  )
}

export default Home