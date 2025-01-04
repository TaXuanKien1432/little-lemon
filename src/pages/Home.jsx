import React from 'react'
import IntroComponent from '../components/IntroComponent'
import Specials from '../components/Specials'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div className="page home">
      <IntroComponent />
      <Specials />
      <Testimonials />
    </div>
  )
}

export default Home