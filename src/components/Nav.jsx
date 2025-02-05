import React, { useContext, useEffect, useState } from 'react'
import logo from '../images/Logo .svg'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { LogInContext } from '../App'

const Nav = ({totalItems}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const {isLoggedIn} = useContext(LogInContext);

    const handleClick = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);
    return (
        <div className={`nav-section ${showNavbar ? "visible" : "hidden"}`}>
            <nav className="nav">
                <img src={logo} alt="logo"></img>
                <div className="menu-button-container" onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} className="hamburger-button" />
                    <div className={totalItems == 0 ? "total-items-menu-inactive" : "total-items-menu-active"}>{totalItems}</div>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li onClick={() => setMenuOpen(false)}>
                        <NavLink to="/"><p>Home</p></NavLink>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <NavLink to="/about"><p>About</p></NavLink>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <NavLink to="/cart">
                            <div>
                                <p>Cart</p>
                                <div className={totalItems == 0 ? "total-items-inactive" : "total-items-active"}>{totalItems}</div>
                            </div>
                        </NavLink>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <NavLink to="/order-online"><p>Order Online</p></NavLink>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <NavLink to="/reservations"><p>Reservations</p></NavLink>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        {isLoggedIn ? 
                        <NavLink to="/logout"><p>Logout</p></NavLink> : 
                        <NavLink to="/login"><p>Login</p></NavLink>}
                    </li>
                </ul>
            </nav>
        </div>
  )
}

export default Nav
