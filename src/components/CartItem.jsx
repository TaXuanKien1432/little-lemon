import React from 'react'

const CartItem = ({item, setCart}) => {
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
        <div className="cart-item-price">{item.price.toFixed(2)}</div>
        <div className="quantity-button">
          <button onClick = {item.quantity == 1 ? () => removeFromCart(item.id) : () => decreaseQuantity(item)}>-</button>
          <div>{item.quantity}</div>
          <button onClick = {() => increaseQuantity(item)}>+</button>
        </div>
    </div>
  )
}

export default CartItem