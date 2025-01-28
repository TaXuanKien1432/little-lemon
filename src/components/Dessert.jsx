import React from 'react'
import { useOutletContext } from 'react-router-dom'
import FoodCard from './FoodCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons';

const Dessert = () => {
  const { addToCart, dessertProducts, searchedProducts, query } = useOutletContext();
  let displayContext;
  if (searchedProducts.length === 0 && query) {
    displayContext = (
      <div className="food-not-found-container">
        <FontAwesomeIcon icon={faFaceFrown} className="sad-icon" />
        <div className="foods-not-found">Food not found</div>
      </div>
    )
  } else if (searchedProducts.length === 0 && !query.trim()) {
    displayContext = (
      <ul className="flex-food-container">
        {dessertProducts.map((product) => 
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

export default Dessert