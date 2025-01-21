import React from 'react'
import { useOutletContext } from 'react-router-dom'
import FoodCard from './FoodCard';

const Breakfast = () => {
  const { addToCart, breakfastProducts, searchedProducts, query } = useOutletContext();
  let displayContext;
  if (searchedProducts.length === 0 && query) {
    displayContext = (
      <div className="foods-not-found">Foods not found</div>
    )
  } else if (searchedProducts.length === 0 && !query.trim()) {
    displayContext = (
      <ul className="flex-food-container">
        {breakfastProducts.map((product) => 
        <FoodCard 
        product={product} 
        addToCart={addToCart}/>)}
      </ul>
    )
  } else if (searchedProducts.length > 0) {
    displayContext = (
      <ul className="flex-food-container">
        {searchedProducts.map((product) => 
        <FoodCard 
        product={product} 
        addToCart={addToCart}/>)}
      </ul>
    )
  }
  return (
    <>{displayContext}</>
  )
}

export default Breakfast