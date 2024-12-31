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
        <div className="footersection">
            <h5 className="footerheader">Important Links</h5>
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/about">About</Link>
            </p>
            <p>
                <Link to="/cart">Cart</Link>
            </p>
            <p>
                <Link to="/order-online">Order Online</Link>
            </p>
            <p>
                <Link to="/reservations">Reservations</Link>
            </p>
            <p>
                <Link to="/login">Login</Link>
            </p>
        </div>
        <div className="footersection">
            <h5 className="footerheader">Contact</h5>
            <div className="smallsections">
                <p>Address:</p>
                <p>123 Town Street, Chicago</p>
            </div>
            <div className="smallsections">
                <p>Phone:</p>
                <p>+00 123 456 789</p>
            </div>
            <div className="smallsections">
                <p>Email:</p>
                <p>little@lemon.com</p>
            </div>
        </div>
        <div className="footersection">
            <h5 className="footerheader">Social Media Links</h5>
            <p><a href="https://www.facebook.com/shxxkien1432/" target="_blank" rel="noopener noreferrer">Facebook</a></p>
            <p><a href="https://www.instagram.com/shxxkien1432/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            <p><a href="https://www.linkedin.com/in/kien-ta-xuan-566196205/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
            
    </footer>
  )
}

export default Footer