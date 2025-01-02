import React from 'react'
import restaurantFood from '../images/restaurantfood.jpg'
import croppedRestaurantFood from '../images/cropped-Restaurantfood.jpg'
const IntroComponent = () => {
  return (
    <div className="intro-section">
      <div className="intro-component">
          <div className = "display">
            <p className="display-title">Little Lemon</p>
            <p className="sub-title">Chicago</p>
            <p className="description">We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
            <div id="booking-button">Reserve Table</div>
          </div>
          <img className="big" src={restaurantFood} alt="A picture of Little Lemon's food"></img>
          <img className="small" src={croppedRestaurantFood} alt="A picture of Little Lemon's food"></img>
      </div>
    </div>
  )
}

export default IntroComponent