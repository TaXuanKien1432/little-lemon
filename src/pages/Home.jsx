import React from 'react'
import IntroComponent from '../components/IntroComponent'
import Specials from '../components/Specials'
import Testimonials from '../components/Testimonials'
import AboutComponent from '../components/AboutComponent'

const Home = ({addToCart}) => {
  return (
    <div className="main-content">
      <IntroComponent />
      <Specials addToCart={addToCart}/>
      <Testimonials />
      <AboutComponent />
    </div>
  )
}

export default Home