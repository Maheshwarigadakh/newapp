import "./navbar.css"

function navbar() {
  return (
    <div className="navbar">
        <span className="brand-name">New App</span>
        
        <div className="navbat-links">
            <a href="/" className="navbat-link">Home</a>
            <a href="/about" className="navbat-link">About</a>
            <a href="/contact" className="navbat-link">Contact</a>


        </div>
        </div>
  )
}

export default navbar