import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
const FoodCard = ({product, addToCart}) => {
    const [liked, Setliked] = useState(false);
    const likedContent = (
        <div>
            <span className="food-likes">{product.likes + 1}</span>
            <FontAwesomeIcon icon={faSolidHeart} style={{color: "#ff0000",}} onClick = {() => Setliked(!liked)} />
        </div>
    )
    const notLikedContent = (
        <div>
            <span className="food-likes">{product.likes}</span>
            <FontAwesomeIcon icon={faRegularHeart} style={{color: "#ff0000",}} onClick = {() => Setliked(!liked)} />
        </div>
    )

    return (
    <li className="food-card-container">
        <div className="food-content-container">
            <div className="food-card-img-container">
                <img src={product.image} alt={product.name}></img>
            </div>
            <div className="food-flex-header">
                <p className="food-title">{product.name}</p>
                {liked ? likedContent : notLikedContent}
            </div>
            <p className="food-type">{product.type}</p>
            <div className="food-flex-footer">
                <p className="food-price">$ {product.price.toFixed(2)}</p>
                <div className="food-button" onClick={() => addToCart(product)}>Add to Cart</div>
            </div>
        </div>
    </li>
  )
}

export default FoodCard