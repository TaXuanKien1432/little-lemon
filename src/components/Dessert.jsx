import React from 'react'
import { useOutletContext } from 'react-router-dom'
import FoodCard from './FoodCard';

const Dessert = () => {
  const { addToCart, dessertProducts, searchedProducts, query } = useOutletContext();
  let displayContext;
  if (searchedProducts.length === 0 && query) {
    displayContext = (
      <div className="foods-not-found">Foods not found</div>
    )
  } else if (searchedProducts.length === 0 && !query.trim()) {
    displayContext = (
      <ul className="flex-food-container">
        {dessertProducts.map((product) => 
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
  } else if (searchedProducts.length > 0) {
    displayContext = (
      <ul className="flex-food-container">
        {searchedProducts.map((product) => 
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
  return (
    <>{displayContext}</>
  )
}

export default Dessert