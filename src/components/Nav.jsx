import React from 'react'
import logo from '../images/Logo .svg'
import '../App.css'

const Nav = () => {
  return (
    <nav className="nav">
        <img src={logo} alt="logo"></img>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">About</a>
            </li>
            <li>
                <a href="/">Menu</a>
            </li>
            <li>
                <a href="/">Reservations</a>
            </li>
            <li>
                <a href="/">Order Online</a>
            </li>
            <li>
                <a href="/">Login</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
