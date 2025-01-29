import React from 'react'
import '../App.css'

const LoginPopup = ({cancel, onClose}) => {
    return (
    <div className="popup-container-cart">
        <div className="popup-cart" role="alert" aria-live="assertive">
            <h1>Unable to checkout</h1>
            <p>You have not logged in</p>
            <button onClick={cancel} aria-label="Cancel" className="cancel-button">CANCEL</button>
            <button onClick={onClose} aria-label="Close popup">
                GO TO LOGIN
            </button>
        </div>
    </div>
  )
}

export default LoginPopup