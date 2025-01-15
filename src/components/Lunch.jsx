import React from 'react'
import { useOutletContext } from 'react-router-dom'
import FoodCard from './FoodCard';

const Lunch = () => {
  const { addToCart, lunchProducts } = useOutletContext();
  return (
    <ul className="flex-food-container">
      {lunchProducts.map((product) => 
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

export default Lunch