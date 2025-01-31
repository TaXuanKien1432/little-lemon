import React, { useContext, useState } from 'react'
import { LogInContext } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { NavLink, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import LoginPopup from '../components/LoginPopup';

const Cart = ({cart, setCart, totalItems, totalPrice}) => {
  const {isLoggedIn} = useContext(LogInContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const emptyCart = (
    <div className="empty-cart">
      <FontAwesomeIcon icon={faCartShopping} style={{color: "#495E57", width: "100px", height: "auto"}} />
      <p className="empty-title">Your cart is empty</p>
      <NavLink to="/order-online"><p>Order food now </p></NavLink>
    </div>
  )

  const navigate = useNavigate();
  
  return (
    <div className="cart main-content">
      {cart.length > 0 ?
      <div className="full-cart">
        <p className="full-cart-title">Your Cart</p>
        <div className="cart-items-display">
          <ul className="grid-cart-title">
            <li>Item</li>
            <li>Price</li>
            <li>Quantity</li>
          </ul>
          <ul>
            {cart.map(item => <li key={item.id}><CartItem item={item} setCart={setCart}/></li>)}
          </ul>
        </div>
        <div className="cart-checkout">
          <h1>Order Summary</h1>
          <div className="flex-price">
            <p>Total ({totalItems} {totalItems == 1 ? "item" : "items"}):</p>
            <p>$ {totalPrice}</p>
          </div>
          <button onClick={isLoggedIn ? () => navigate("/checkout") : () => setIsPopupOpen(true)}>Checkout</button>
        </div>
        {isPopupOpen && <LoginPopup cancel={() => setIsPopupOpen(false)} onClose={() => navigate("/login")} />}
      </div>
      : emptyCart}
    </div>
  )
}

export default Cart