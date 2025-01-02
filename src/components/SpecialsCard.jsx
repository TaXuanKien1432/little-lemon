import React from 'react'

const SpecialsCard = ({image, title, cost, description}) => {
  return (
    <article>
      <div className="img-container"><img src={image} alt={title} width="100px" /></div>
      <div className="description-container">
        <h1 className="card-title">{title}</h1>
        <p className="card-cost">{cost}</p>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-button">Order Now</div>
    </article>
  )
}

export default SpecialsCard