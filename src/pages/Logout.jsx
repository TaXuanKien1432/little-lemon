import React, { useContext, useState } from 'react';
import { LogInContext } from '../App';
import { useNavigate } from 'react-router-dom';
import lemonLogo from '../images/little_lemon.png';
import Popup from '../components/Popup';

const Logout = () => {
    const {setIsLoggedIn} = useContext(LogInContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        setIsPopupOpen(true);
    }
    return (
    <div className="logout-section">
        <img src={lemonLogo} alt="user icon"></img>
        <button className="logout-button" onClick={handleLogout}>Log Out</button>
        {isPopupOpen && <Popup message= "Logged out successfully!" onClose={() => {setIsPopupOpen(false); setIsLoggedIn(false); navigate('/');}} />}
    </div>
  )
}

export default Logout