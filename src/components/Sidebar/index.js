import './index.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/VS_logo.png'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' />
        <img className='logo-img'src={Logo} alt='logo' />
  </div>
  )
}

export default Sidebar