import React, { useContext } from 'react';
import { LogInContext } from '../App';
import { useNavigate } from 'react-router-dom';
import lemonLogo from '../images/little_lemon.png';

const Logout = () => {
    const {setIsLoggedIn} = useContext(LogInContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/');
    }
    return (
    <div className="logout-section">
        <img src={lemonLogo} alt="user icon"></img>
        <button className="logout-button" onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Logout