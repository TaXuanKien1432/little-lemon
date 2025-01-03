import React from 'react'

const SpecialsCard = ({image, title, cost, description}) => {
  return (
    <article className="card-container">
      <div className="img-container">
        <img src={image} alt={title}/>
      </div>
      <div className="description-container">
        <div className="flex-card-container">
          <h1 className="card-title">{title}</h1>
          <p className="card-cost">{cost}</p>
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
      </div>
      <div className="card-button">Order Now</div>
    </article>
  )
}

export default SpecialsCard