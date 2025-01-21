import React from 'react'

const SpecialsCard = ({food, addToCart}) => {
  return (
    <article className="card-container">
      <div className="img-container">
        <img src={food.image} alt={food.name}/>
      </div>
      <div className="description-container">
        <div className="flex-card-container">
          <h1 className="card-title">{food.name}</h1>
          <p className="card-cost">${food.price}</p>
        </div>
        <div className="card-description">
          <section><p>{food.description}</p></section>
          <div className="card-button" onClick = {() => addToCart(food)}>Add to Cart</div>
        </div>
      </div>      
    </article>
  )
}

export default SpecialsCard