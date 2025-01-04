import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const RatingCard = ({avatar, name, comment}) => {
  return (
    <article className="ratingCard">
        <div className="avatar-container"><img src={avatar} alt="avatar" /></div>
        <h1>{name}</h1>
        <div className="stars-container">
            <FontAwesomeIcon icon={faStar} style={{color: "#495e57",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#495e57",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#495e57",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#495e57",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#495e57",}} />
        </div>
        <section className="comment-container">
            <p>{comment}</p>
        </section>
    </article>
  )
}

export default RatingCard