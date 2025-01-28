import React, { useContext } from 'react'
import { LogInContext } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = ({cart, setCart, totalItems}) => {
  const {isLoggedIn} = useContext(LogInContext);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity*item.price, 0).toFixed(2);

  const emptyCart = (
    <div className="empty-cart">
      <FontAwesomeIcon icon={faCartShopping} style={{color: "#495E57", width: "100px", height: "auto"}} />
      <p className="empty-title">Your cart is empty</p>
      <NavLink to="/order-online"><p>Order food now </p></NavLink>
    </div>
  )
  
  return (
    <div className="cart">
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
          <button>Checkout</button>
        </div>
      </div>
      : emptyCart}
    </div>
  )
}

export default Cart