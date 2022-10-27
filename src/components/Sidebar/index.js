import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/VS_logo.png'
import { RiUser3Fill, RiHome2Fill } from 'react-icons/ri'
import { SiGmail } from 'react-icons/si'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import './index.scss'

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
          to="/"
          onClick={() => setShowNav(false)}>
          <RiHome2Fill />
        </NavLink>
        <NavLink 
          activeclassname="active"
          to="/about"
          onClick={() => setShowNav(false)}>
          <RiUser3Fill />
        </NavLink>
        <NavLink 
          activeclassname="active"
          to="/contact"
          onClick={() => setShowNav(false)}>
          <SiGmail />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/vikussia48"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vikussia48"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar