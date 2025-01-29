import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import PopupCart from '../components/PopupCart'

const Checkout = ({cart, totalItems, totalPrice, setCart}) => {
    const [checkoutDatas, setCheckoutDatas] = useState({
        shippingAddress: "",
        cardType: "visa",
        cardNumber: "",
        expiration: "",
        cvv: "",
    })
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const removeFromCart = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    }

    const handleChange = (e) => {
        setCheckoutDatas(prevDatas => {
            if (e.target.name !== "cardNumber") {
                return {
                    ...prevDatas,
                    [e.target.name]: e.target.value,
                }
            } else {
                let input = e.target.value
                input = input.replace(/\D/g, "");
                if (input.length > 16) return prevDatas;
                input = input.replace(/(.{4})/g, "$1 ").trim();
                return {
                    ...prevDatas,
                    cardNumber: input,
                }
            }
        })
    }

    const taxFees = parseFloat((totalPrice * 0.05).toFixed(2))

    return (
    <div className="checkout-page">
        <form className="checkout">
            <NavLink to="/cart" className="back-button">
                <h4>{"<"}</h4>
                <h4>Back</h4>
            </NavLink>
            <div className="ship">
                <label htmlFor="shippingAddress">Shipping address</label>
                <input type="text" value={checkoutDatas.shippingAddress} id="shippingAddress" name="shippingAddress" onChange={handleChange}></input>
            </div>
            <p className="payment-information">Payment information</p>
            <ul>
                <div className={checkoutDatas.cardType==="visa" ? "checkout-active" : ""}  onClick={() => setCheckoutDatas(prevDatas => {return {...prevDatas, cardType: "visa"}})} >
                    <li><FontAwesomeIcon icon={faCcVisa} /></li>
                </div>
                <div className={checkoutDatas.cardType==="mastercard" ? "checkout-active" : ""} onClick={() => setCheckoutDatas(prevDatas => {return {...prevDatas, cardType: "mastercard"}})}>
                    <li  ><FontAwesomeIcon icon={faCcMastercard} /></li>
                </div>
            </ul>
            <div className="card-number-container">
                <label htmlFor="cardNumber" className="card-number">Card number</label>
                <div>
                <input placeholder='1234 1234 1234 1234' value={checkoutDatas.cardNumber} id="cardNumber" name="cardNumber" onChange={handleChange}></input>
                {checkoutDatas.cardType === "visa" ? <FontAwesomeIcon className="card-display" icon={faCcVisa} /> : checkoutDatas.cardType === "mastercard" ? <FontAwesomeIcon className="card-display" icon={faCcMastercard} /> : <></>}
                </div>
            </div>
            <div className="grid-card-container">
                <div className="expiration-container">
                    <label htmlFor="expiration" className="expiration">Expiration</label>
                    <input value={checkoutDatas.expiration} placeholder="MM/YY" id="expiration" name="expiration" onChange={handleChange}></input>
                </div>
                <div className="cvv-container">
                    <label htmlFor="cvv" className="cvv">CVV</label>
                    <input value={checkoutDatas.cvv} placeholder="CVV" id="cvv" name="cvv" onChange={handleChange}></input>
                </div>
            </div>
            <NavLink to="/cart" className="back-text">Back</NavLink>
            <button className="payment-button">Confirm Payment</button>
        </form>   
        <div className="checkout-large-component">
            <div className="checkout-component">
                <h3>Order Summary ({totalItems} items)</h3>
                <div className="checkout-items">
                    {cart.map(item => 
                    <div className="checkout-item">
                        <p>x{item.quantity}</p>
                        <p>{item.name}</p>
                        <p className="checkout-item-price">${item.price}</p>
                        <FontAwesomeIcon icon={faTrash} onClick={() => setIsPopupOpen(true)} className="trash" />
                        {isPopupOpen && <PopupCart onClose={() => {removeFromCart(item.id); setIsPopupOpen(false);}} cancel={() => setIsPopupOpen(false)} />}
                    </div>)}
                </div>
            </div>
            <div className="other-fees">
                <div>
                    <p>Delivery</p>
                    <p>Free</p>
                </div>
                <div>
                    <p>Discount</p>
                    <p>$0.00</p>
                </div>
            </div>
            <div className="total">
                <div className="subtotal">
                    <p>Total (exc tax)</p>
                    <p>${totalPrice}</p>
                </div>
                <div className="tax">
                    <p>Tax</p>
                    <p>${taxFees}</p>
                </div>
            </div>
            <div className="grandtotal">
                <h3>Order Total</h3>
                <h3>${(parseFloat(totalPrice) + taxFees).toFixed(2)}</h3>
            </div>
        </div>
    </div>
  )
}

export default Checkout