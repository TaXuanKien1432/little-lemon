import React from 'react'
import logo from '../images/Logo .svg'
import '../App.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
        <img src={logo} alt="logo"></img>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
            <li>
                <Link to="/order-online">Order Online</Link>
            </li>
            <li>
                <Link to="/reservations">Reservations</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
