import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CartItem = ({item, increaseQuantity, decreaseQuantity}) => {
  return (
    <div>
        <div className="cart-item-img-container"><img src={item.image}></img></div>
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">{item.price}</div>
        <div>
            <button onClick = {() => decreaseQuantity(item)} disabled={item.quantity == 1}>-</button>
            <div>{item.quantity}</div>
            <button onClick = {() => increaseQuantity(item)}>+</button>
        </div>
        <div><FontAwesomeIcon icon={faTrash} style={{color: "#000000",}} /></div>
    </div>
  )
}

export default CartItem