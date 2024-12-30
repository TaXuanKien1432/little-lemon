import React from 'react'
import smallLogo from '../images/small_logo.png'
import '../App.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer">
        <div>
            <img src={smallLogo} alt="small-logo" width={100}></img>
        </div>
        <div className="grid-container">
            <div>
                <div>Doormat</div>
                <div>Navigation</div>
                </div>
            <p>Contact</p>
            <p>Social Media Links</p>
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
            <ul>
                <li><a href="/">Address</a></li>
                <li><a href="/">Phone</a></li>
                <li><a href="/">Email</a></li>
            </ul>
            <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">LinkedIn</a></li>
            </ul>
        </div>

    </footer>
  )
}

export default Footer