import React from 'react'
import '../App.css'

const PopupCart = ({cancel, onClose}) => {
    return (
    <div className="popup-container-cart">
        <div className="popup-cart" role="alert" aria-live="assertive">
            <h1>Remove from cart</h1>
            <p>Are you sure you want to remove this item?</p>
            <button onClick={cancel} aria-label="Cancel" className="cancel-button">CANCEL</button>
            <button onClick={onClose} aria-label="Close popup">
                REMOVE
            </button>
        </div>
    </div>
  )
}

export default PopupCart