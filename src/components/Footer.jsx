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
            <p className="footerheader">Doormat Navigation</p>
            <p className="footerheader">Contact</p>
            <p className="footerheader">Social Media Links</p>
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
            <ul>
                <li>
                    <div>Address:</div>
                    <div>123 Town Street, Chicago</div>
                </li>
                <li>
                    <div>Phone:</div>
                    <div>+00 123 456 789</div>
                </li>
                <li>
                    <div>Email:</div>
                    <div>little@lemon.com</div>
                </li>
            </ul>
            <ul>
                <li><a href="https://www.facebook.com/shxxkien1432/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.instagram.com/shxxkien1432/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/kien-ta-xuan-566196205/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </div>

    </footer>
  )
}

export default Footer