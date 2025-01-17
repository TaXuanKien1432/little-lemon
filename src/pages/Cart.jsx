import React, { useContext } from 'react'
import { LogInContext } from '../App'

const Cart = ({cart}) => {
  const {isLoggedIn} = useContext(LogInContext);
  const emptyCart = (
    <div>
      <p>Cart is empty</p>
    </div>
  )
  console.log(cart) 
  return (
    <div>
      {cart && cart.length > 0 ? "Cart" : emptyCart}
    </div>
  )
}

export default Cart