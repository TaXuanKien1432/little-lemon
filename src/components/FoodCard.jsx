import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
const FoodCard = ({name, image, type, id, price, likes, addToCart}) => {
    const [liked, Setliked] = useState(false);
    const likedContent = (
        <div>
            <span className="food-likes">{likes + 1}</span>
            <FontAwesomeIcon icon={faSolidHeart} style={{color: "#ff0000",}} onClick = {() => Setliked(!liked)} />
        </div>
    )
    const notLikedContent = (
        <div>
            <span className="food-likes">{likes}</span>
            <FontAwesomeIcon icon={faRegularHeart} style={{color: "#ff0000",}} onClick = {() => Setliked(!liked)} />
        </div>
    )

    return (
    <li className="food-card-container">
        <div className="food-content-container">
            <div className="food-card-img-container">
                <img src={image} alt={name}></img>
            </div>
            <div className="food-flex-header">
                <p className="food-title">{name}</p>
                {liked ? likedContent : notLikedContent}
            </div>
            <p className="food-type">{type}</p>
            <div className="food-flex-footer">
                <p className="food-price">$ {price}</p>
                <div className="food-button" onClick={() => addToCart({name, id, price, image, type})}>Add to Cart</div>
            </div>
        </div>
    </li>
  )
}

export default FoodCard