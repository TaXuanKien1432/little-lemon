import React, { useState } from 'react'
import logo from '../images/Logo .svg'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = () => setMenuOpen(!menuOpen);
    return (
        <div className="nav-section">
            <nav className="nav">
                <img src={logo} alt="logo"></img>
                <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} className="hamburger-button" onClick={handleClick} />
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order-online">Order Online</NavLink>
                    </li>
                    <li>
                        <NavLink to="/reservations">Reservations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
  )
}

export default Nav
