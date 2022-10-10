import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/VS_logo.png'
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
          <FontAwesomeIcon icon={faHome} color="#B3B3B3" />
        </NavLink>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/about">
          <FontAwesomeIcon icon={faUser} color="#B3B3B3" />
        </NavLink>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#B3B3B3" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/vikussia48"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#B3B3B3"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vikussia48"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#B3B3B3"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar