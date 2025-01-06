import React, { useContext, useState } from 'react'
import logo from '../images/Logo .svg'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { LogInContext } from '../App'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = () => setMenuOpen(!menuOpen);
    const {isLoggedIn} = useContext(LogInContext);
    return (
        <div className="nav-section">
            <nav className="nav">
                <img src={logo} alt="logo"></img>
                <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} className="hamburger-button" onClick={handleClick} />
                <ul className={menuOpen ? "open" : ""}>
                    <li onClick={() => setMenuOpen(false)}>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <NavLink to="/order-online">Order Online</NavLink>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <NavLink to="/reservations">Reservations</NavLink>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        {isLoggedIn ? 
                        <NavLink to="/logout">Logout</NavLink> : 
                        <NavLink to="/login">Login</NavLink>}
                    </li>
                </ul>
            </nav>
        </div>
  )
}

export default Nav
