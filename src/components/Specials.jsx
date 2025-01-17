import React from 'react'
import { Link } from 'react-router-dom'
import greekSalad from '../images/greek salad.jpg'
import bruchetta from '../images/bruchetta.svg'
import lemonDesert from '../images/desert.jpg'
import SpecialsCard from './SpecialsCard'

const Specials = ({addToCart}) => {
    const foodsData = [
        {   name: "Greek Salad",
            id: 22,
            image: greekSalad,
            price: 12.99, 
            type: "Breakfast",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        },
        {   name: "Bruchetta",
            id: 23,
            image: bruchetta,
            price: 5.99,
            type: "Breakfast",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {   name: "Lemon Dessert",
            id: 24,
            image: lemonDesert,
            price: 5.00,
            type: "Dessert",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ];
  
    return (
    <div className="specials-section">
        <section>
            <div className="specials-header">
                <p className="specials-title">This week's specials!</p>
                <Link to="/order-online" className="menu-button">Online Menu</Link>
            </div>
            <ul className="specials-content">
                {foodsData.map((food) => 
                    (<li>
                        <SpecialsCard image={food.image} key={food.id} id={food.id} name={food.name} price={food.price} type={food.type} description={food.description} addToCart={addToCart} />
                    </li>)
                )}
            </ul>
        </section>
    </div>
  )
}

export default Specials