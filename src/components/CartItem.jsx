import React from 'react'

const CartItem = ({item, increaseQuantity, decreaseQuantity}) => {
  return (
    <div className="cart-item">
        <div>
          <div className="cart-item-img-container"><img src={item.image}></img></div>
          <div className="cart-item-name">{item.name}</div>
        </div>
        <div className="cart-item-price">{item.price}</div>
        <div className="quantity-button">
          <button onClick = {() => decreaseQuantity(item)} disabled={item.quantity == 1}>-</button>
          <div>{item.quantity}</div>
          <button onClick = {() => increaseQuantity(item)}>+</button>
        </div>
    </div>
  )
}

export default CartItem