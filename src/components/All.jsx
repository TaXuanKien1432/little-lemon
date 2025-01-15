import React from 'react'
import { useOutletContext } from 'react-router-dom'
import FoodCard from './FoodCard';

const All = () => {
  const { addToCart, products} = useOutletContext();
  return (
    <ul className="flex-food-container">
      {products.map((product) => 
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

export default All