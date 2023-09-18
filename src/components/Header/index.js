import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-main-container">
    <div className="logo-head-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <p className="nav-text">Wave</p>
    </div>
    <ul className="nav-items-container">
      <li>
        <Link className="nav-text" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-text" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-text" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
