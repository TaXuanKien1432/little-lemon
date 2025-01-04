import React from 'react'
import IntroComponent from '../components/IntroComponent'
import Specials from '../components/Specials'
import Testimonials from '../components/Testimonials'
import AboutComponent from '../components/AboutComponent'

const Home = () => {
  return (
    <div className="page home">
      <IntroComponent />
      <Specials />
      <Testimonials />
      <AboutComponent />
    </div>
  )
}

export default Home