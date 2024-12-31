import React from 'react'
import logo from '../images/Logo .svg'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
        <img src={logo} alt="logo"></img>
        <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} className="menubutton" />
        <ul>
            <li>
                <Link to="/" className="link">Home</Link>
            </li>
            <li>
                <Link to="/about" className="link">About</Link>
            </li>
            <li>
                <Link to="/cart" className="link">Cart</Link>
            </li>
            <li>
                <Link to="/order-online" className="link">Order Online</Link>
            </li>
            <li>
                <Link to="/reservations" className="link">Reservations</Link>
            </li>
            <li>
                <Link to="/login" className="link">Login</Link>
            </li>
        </ul>
        
    </nav>
  )
}

export default Nav
