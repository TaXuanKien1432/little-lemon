import React, { useState } from 'react'
import PopupCart from './PopupCart';

const CartItem = ({item, setCart}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  }

  const decreaseQuantity = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const increaseQuantity = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  return (
    <div className="cart-item">
        <div>
          <div className="cart-item-img-container"><img src={item.image}></img></div>
          <div className="cart-item-name">{item.name}</div>
        </div>
        <div className="cart-item-price">$ {item.price.toFixed(2)}</div>
        <div className="quantity-button">
          <button onClick = {item.quantity == 1 ? () => setIsPopupOpen(true) : () => decreaseQuantity(item)}>-</button>
          <div>{item.quantity}</div>
          <button onClick = {() => increaseQuantity(item)}>+</button>
        </div>
        {isPopupOpen && <PopupCart onClose={() => {removeFromCart(item.id); setIsPopupOpen(false);}} cancel={() => setIsPopupOpen(false)} />}
    </div>
  )
}

export default CartItem