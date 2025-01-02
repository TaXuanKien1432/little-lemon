import React from 'react'
import { Link } from 'react-router-dom'
import greekSalad from '../images/greek salad.jpg'
import bruchetta from '../images/bruchetta.svg'
import lemonDesert from '../images/desert.jpg'
import SpecialsCard from './SpecialsCard'

const Specials = () => {
    const foodsData = [
        [greekSalad, "Greek salad", "$12.99", "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."],
        [bruchetta, "Bruchetta", "$5.99", "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."],
        [lemonDesert, "Lemon Dessert", "$5.00", "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."]
    ];
  
    return (
    <div className="specials-section">
        <section>
            <div className="specials-header">
                <p className="specials-title">This week's specials!</p>
                <Link to="/order-online" className="menu-button">Online Menu</Link>
            </div>
            <ul>
                {foodsData.map((food) => 
                    (<li>
                        <SpecialsCard image={food[0]} title={food[1]} cost={food[2]} description={food[3]} />
                    </li>)
                )}
            </ul>
        </section>
    </div>
  )
}

export default Specials