import React, { useContext } from 'react'
import { LogInContext } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { NavLink } from 'react-router-dom';

const Cart = ({cart}) => {
  const {isLoggedIn} = useContext(LogInContext);
  const emptyCart = (
    <div className="empty-cart">
      <FontAwesomeIcon icon={faCartShopping} style={{color: "#495E57", width: "100px", height: "auto"}} />
      <p className="empty-title">Your cart is empty</p>
      <NavLink to="/order-online"><p>Order food now </p></NavLink>
    </div>
  )
  return (
    <div>
      {cart.length > 0 ? "Cart" : emptyCart}
    </div>
  )
}

export default Cart