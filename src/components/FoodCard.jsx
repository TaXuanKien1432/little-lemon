import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const FoodCard = (props) => {
    const [liked, Setliked] = useState(false);
    const likedContent = (
        <>
            <span>{props.likes + 1}</span>
            <FontAwesomeIcon icon="fa-solid fa-heart" style={{ color: "#ff0000", cursor: "pointer"}} onClick = {() => Setliked(!liked)} />
        </>
    )
    const notLikedContent = (
        <>
            <span>{props.likes}</span>
            <FontAwesomeIcon icon="fa-regular fa-heart" style={{color: "#ff0000", cursor: "pointer"}} onClick = {() => Setliked(!liked)}/>
        </>
    )

    return (
    <div className="food-card-container">
        <div className="food-card-img-container">
            <img src={props.image} alt={props.name}></img>
        </div>
        <div className="food-flex-header">
            <p className="food-title">{props.name}</p>
            {liked ? {likedContent} : {notLikedContent}}
        </div>
        <p className="food-type">{props.type}</p>
        <div className="food-flex-footer">
            <p className="food-price">$ {props.price}</p>
            <div className="food-button" onClick={props.addToCart}>Add to Cart</div>
        </div>

    </div>
  )
}

export default FoodCard