import React, { useContext, useState } from 'react'
import { LogInContext } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = ({cart, increaseQuantity, decreaseQuantity}) => {
  const {isLoggedIn} = useContext(LogInContext);

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const emptyCart = (
    <div className="empty-cart">
      <FontAwesomeIcon icon={faCartShopping} style={{color: "#495E57", width: "100px", height: "auto"}} />
      <p className="empty-title">Your cart is empty</p>
      <NavLink to="/order-online"><p>Order food now </p></NavLink>
    </div>
  )
  console.log(cart);
  return (
    <div>
      {cart.length > 0 ?
      <div className="full-cart">
        <h1 className="full-cart-title">Your Cart</h1>
        <div className="cart-items-display">
          <ul>
            {cart.map(item => <li key={item.id}><CartItem item={item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/></li>)}
          </ul>
        </div>
      </div>
      : emptyCart}
    </div>
  )
}

export default Cart