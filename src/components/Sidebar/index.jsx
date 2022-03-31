import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/mylogo.png'
import LogoSub from '../../assets/images/mylogosubw.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
  return (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt="Logo" />
            <img className='sub-logo' src={LogoSub} alt="Logo Subtitle" />
        </Link>

        <nav>
            <NavLink exact="true" activeClassName="active" to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a href="https://www.linkedin.com/in/libamlak-birhanu-095089209" rel='noreferrer' target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} color='#d4d4de' />
                </a>
            </li>
            <li>
                <a href="https://www.github.com/libamlakbirhanu" rel='noreferrer' target="_blank">
                    <FontAwesomeIcon icon={faGithub} color='#d4d4de' />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar