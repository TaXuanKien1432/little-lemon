import React from 'react'

const SpecialsCard = ({image, name, id, price, description, type, addToCart}) => {
  return (
    <article className="card-container">
      <div className="img-container">
        <img src={image} alt={name}/>
      </div>
      <div className="description-container">
        <div className="flex-card-container">
          <h1 className="card-title">{name}</h1>
          <p className="card-cost">${price}</p>
        </div>
        <div className="card-description">
          <section><p>{description}</p></section>
          <div className="card-button" onClick = {() => addToCart(name, id, price, image, type)}>Add to Cart</div>
        </div>
      </div>      
    </article>
  )
}

export default SpecialsCard