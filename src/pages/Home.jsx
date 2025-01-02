import React from 'react'
import IntroComponent from '../components/IntroComponent'
import Specials from '../components/Specials'

const Home = () => {
  return (
    <div className="page home">
      <IntroComponent />
      <Specials />
    </div>
  )
}

export default Home