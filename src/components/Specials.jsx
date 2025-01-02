import React from 'react'
import { Link } from 'react-router-dom'

const Specials = () => {
  return (
    <div className="specials-section">
        <section>
            <div className="specials-header">
                <p className="specials-title">This week's specials!</p>
                <Link to="/order-online" className="menu-button">Online Menu</Link>
            </div>
        </section>
    </div>
  )
}

export default Specials