import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/VS_logo.png'
<<<<<<< Updated upstream
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
=======
import { RiUser3Fill, RiHome2Fill } from 'react-icons/ri'
import { SiGmail } from 'react-icons/si'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import './index.scss'
>>>>>>> Stashed changes

const Sidebar = () => {

  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-bar'>
      <Link 
        className='logo' 
        to="/"
        onClick={() => setShowNav(false)}>
        <img className='logo-img'src={Logo} alt='logo' />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
<<<<<<< Updated upstream
          to="/">
          <FontAwesomeIcon icon={faHome} color="#B3B3B3" />
=======
          to="/"
          onClick={() => setShowNav(false)}>
          <RiHome2Fill />
>>>>>>> Stashed changes
        </NavLink>
        <NavLink 
          activeclassname="active"
<<<<<<< Updated upstream
          to="/about">
          <FontAwesomeIcon icon={faUser} color="#B3B3B3" />
=======
          to="/about"
          onClick={() => setShowNav(false)}>
          <RiUser3Fill />
>>>>>>> Stashed changes
        </NavLink>
        <NavLink 
          activeclassname="active"
<<<<<<< Updated upstream
          to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#B3B3B3" />
=======
          to="/contact"
          onClick={() => setShowNav(false)}>
          <SiGmail />
>>>>>>> Stashed changes
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/vikussia48"
            target="_blank"
            rel="noreferrer"
          >
<<<<<<< Updated upstream
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#B3B3B3"
              className="anchor-icon"
            />
=======
            <BsLinkedin />
>>>>>>> Stashed changes
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vikussia48"
            target="_blank"
            rel="noreferrer"
          >
<<<<<<< Updated upstream
            <FontAwesomeIcon
              icon={faGithub}
              color="#B3B3B3"
              className="anchor-icon"
            />
=======
            <BsGithub />
>>>>>>> Stashed changes
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar