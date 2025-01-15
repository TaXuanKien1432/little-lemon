import React from 'react'
import { useOutletContext } from 'react-router-dom'
import FoodCard from './FoodCard';

const Drink = () => {
  const { addToCart, drinkProducts } = useOutletContext();
  return (
    <ul className="flex-food-container">
      {drinkProducts.map((product) => 
      <FoodCard 
      name={product.name} 
      image={product.image} 
      key={product.id} 
      type={product.type} 
      likes={product.likes} 
      price={product.price} 
      addToCart={addToCart}/>)}
    </ul>
  )
}

export default Drink