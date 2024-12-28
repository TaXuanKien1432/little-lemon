import React from 'react'
import smallLogo from '../images/small_logo.png'
import '../App.css'
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
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Cart</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
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