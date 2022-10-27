import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/VS_logo.png'
import { RiUser3Fill, RiHome2Fill } from 'react-icons/ri'
import { SiGmail } from 'react-icons/si'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link 
        className='logo' 
        to="/">
        <img className='logo-img'src={Logo} alt='logo' />
      </Link>
      <nav>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/">
          <RiHome2Fill color='#B3B3B3' size='28px' />
        </NavLink>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/about">
          <RiUser3Fill color='#B3B3B3' size='28px' />
        </NavLink>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/contact">
          <SiGmail color='#B3B3B3' />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/vikussia48"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin color='#B3B3B3' />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vikussia48"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub color='#B3B3B3' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar