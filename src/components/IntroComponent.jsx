import React from 'react'
import restaurantFood from '../images/restaurantfood.jpg'
const IntroComponent = () => {
  return (
    <div className="intro-component">
        <div className = "display">
          <p className="display-title">Little Lemon</p>
          <p className="sub-title">Chicago</p>
          <p className="description">We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
          <div id="booking-button">Reserve Table</div>
        </div>
          <img src={restaurantFood}></img>
    </div>
  )
}

export default IntroComponent