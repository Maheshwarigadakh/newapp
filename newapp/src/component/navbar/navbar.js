import "./navbar.css"
import {Link} from "react-router-dom"
function navbar() {
  return (
    <div className="navbar">
      <span className="brand-name">Mahi's App</span>

      <div className="navbat-links">
        <Link to="/" className="navbat-link">
          Home
        </Link>
        <Link to="/about" className="navbat-link">
          About
        </Link>
        <Link to="/contact" className="navbat-link">
          Contact
        </Link>


      </div>
    </div>
  )
}

export default navbar