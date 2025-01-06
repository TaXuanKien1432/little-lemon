import React from 'react'
import '../App.css'

const Popup = ({message, onClose}) => {
    return (
    <div className="popup-container">
        <div className="popup" role="alert" aria-live="assertive">
            <p>{message}</p>
            <button onClick={onClose} aria-label="Close popup">
            Close
        </button>
        </div>
    </div>
  )
}

export default Popup