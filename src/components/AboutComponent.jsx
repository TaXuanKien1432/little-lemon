import React from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'

const AboutComponent = () => {
  return (
    <div className="about">
        <div className="about-text">
            <p className="about-title">Little Lemon</p>
            <p className="about-subtitle">Chicago</p>
            <p className="about-description">Located in Chicago, Little Lemon is renowned for its delectable dishes made from fresh, local ingredients. Offering a cozy ambiance and attentive service, it's an ideal destination for casual dining or memorable gatherings. Enjoy delicious cuisine and delightful moments at Little Lemon.</p>
        </div>
        <div className="about-imgs-container">
            <div className="about-img-container img1"><img src={img1} /></div>
            <div className="about-img-container img2"><img src={img2} /></div>
        </div>
    </div>
  )
}

export default AboutComponent