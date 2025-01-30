import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import PopupCart from '../components/PopupCart'
import Popup from '../components/Popup'

const Checkout = ({cart, totalItems, totalPrice, setCart}) => {
    const [checkoutDatas, setCheckoutDatas] = useState({
        shippingAddress: "",
        cardType: "",
        cardNumber: "",
        expiration: "",
        cvv: "",
    })

    const [errors, setErrors] = useState({
        shippingAddress: "",
        cardType: "",
        cardNumber: "",
        expiration: "",
        cvv: "",
    })

    const handleBlur = (e) => {
        if (!e.target.value) {
            setErrors(prevErrors => {
                return {
                    ...prevErrors,
                    [e.target.name]: "Required",
                }
            })
        }
    }

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isCheckoutPopupOpen, setIsCheckoutPopupOpen] = useState(false);
    const navigate = useNavigate();

    const removeFromCart = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    }

    const validateField = (fieldName, fieldValue) => {
        if (!fieldValue) {
            return "Required";
        }
        if (fieldName === "cardNumber" && !/^\d{4} \d{4} \d{4} \d{4}$/.test(fieldValue)) {
            return "Invalid card number";
        }
        if (fieldName === "expiration" && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(fieldValue)) {
            return "Invalid expiration date";
        }
        if (fieldName === "cvv" && !/^\d{3}$/.test(fieldValue)) {
            return "Invalid CVV";
        }
        return "";
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;
        if (name === "cardNumber") {
            formattedValue = value.replace(/\D/g, "");
            if (formattedValue.length > 16) return;
            formattedValue = formattedValue.replace(/(.{4})/g, "$1 ").trim();
        } else if (name === "expiration") {
            formattedValue = value.replace(/\D/g, "");
            if (formattedValue.length > 4) return;
            if (formattedValue.length > 2) {
                formattedValue = formattedValue.replace(/(\d{2})(\d{1,2})/, "$1/$2");
            }
        } else if (name === "cvv") {
            formattedValue = value.replace(/\D/g, "");
            if (formattedValue.length > 3) return;
        }

        setCheckoutDatas((prevDatas) => ({
            ...prevDatas,
            [name]: formattedValue,
        }));

        const errorMessage = validateField(name, formattedValue);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        Object.keys(checkoutDatas).forEach((name) => {
            const errorMessage = validateField(name, checkoutDatas[name]);
            newErrors[name] = errorMessage;
        });
        setErrors(newErrors);
        const hasErrors = Object.values(newErrors).some((error) => error !== "");
        if (hasErrors) return;
        setIsCheckoutPopupOpen(true);
        setCheckoutDatas({
            shippingAddress: "",
            cardType: "",
            cardNumber: "",
            expiration: "",
            cvv: "",
        });
        setErrors({
            shippingAddress: "",
            cardType: "",
            cardNumber: "",
            expiration: "",
            cvv: "",
        });
    }

    return (
    <div className="checkout-page">
        <form className="checkout" onSubmit={handleSubmit}>
            <NavLink to="/cart" className="back-button">
                <h4>{"<"}</h4>
                <h4>Back</h4>
            </NavLink>
            <div className="ship">
                <label htmlFor="shippingAddress">Shipping address <span>*</span></label>
                <input type="text" value={checkoutDatas.shippingAddress} id="shippingAddress" name="shippingAddress" onChange={handleChange} onBlur={handleBlur}></input>
                <p className="errors">{errors.shippingAddress}</p>
            </div>
            <p className="payment-information">Payment information <span>*</span></p>
            <ul>
                <div className={checkoutDatas.cardType==="visa" ? "checkout-active" : ""}  onClick={() => {setCheckoutDatas(prevDatas => {return {...prevDatas, cardType: "visa"}}); setErrors(prevErrors => {return {...prevErrors, cardType: ""}})}} >
                    <li><FontAwesomeIcon icon={faCcVisa} /></li>
                </div>
                <div className={checkoutDatas.cardType==="mastercard" ? "checkout-active" : ""} onClick={() => {setCheckoutDatas(prevDatas => {return {...prevDatas, cardType: "mastercard"}}); setErrors(prevErrors => {return {...prevErrors, cardType: ""}})}}>
                    <li><FontAwesomeIcon icon={faCcMastercard} /></li>
                </div>
            </ul>
            <p className="errors">{errors.cardType}</p>
            <div className="card-number-container">
                <label htmlFor="cardNumber" className="card-number">Card number <span>*</span></label>
                <div>
                <input placeholder='1234 1234 1234 1234' value={checkoutDatas.cardNumber} id="cardNumber" name="cardNumber" onChange={handleChange} onBlur={handleBlur}></input>
                {checkoutDatas.cardType === "visa" ? <FontAwesomeIcon className="card-display" icon={faCcVisa} /> : checkoutDatas.cardType === "mastercard" ? <FontAwesomeIcon className="card-display" icon={faCcMastercard} /> : <></>}
                <p className="errors">{errors.cardNumber}</p>
                </div>
            </div>
            <div className="grid-card-container">
                <div className="expiration-container">
                    <label htmlFor="expiration" className="expiration">Expiration <span>*</span></label>
                    <input value={checkoutDatas.expiration} placeholder="MM/YY" id="expiration" name="expiration" onChange={handleChange} onBlur={handleBlur}></input>
                    <p className="errors">{errors.expiration}</p>
                </div>
                <div className="cvv-container">
                    <label htmlFor="cvv" className="cvv">CVV <span>*</span></label>
                    <input value={checkoutDatas.cvv} placeholder="123" id="cvv" name="cvv" onChange={handleChange} onBlur={handleBlur}></input>
                    <p className="errors">{errors.cvv}</p>
                </div>
            </div>
            <NavLink to="/cart" className="back-text">Back</NavLink>
            <button className="payment-button">Confirm Payment ${(parseFloat(totalPrice) + parseFloat((totalPrice * 0.05).toFixed(2))).toFixed(2)}</button>
            {isCheckoutPopupOpen && <Popup message="Payment has been successfully processed. Thank you!" onClose={() => {setIsCheckoutPopupOpen(false); navigate("/");}} />}
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
                    <p>${(totalPrice * 0.05).toFixed(2)}</p>
                </div>
            </div>
            <div className="grandtotal">
                <h3>Order Total</h3>
                <h3>${(parseFloat(totalPrice) + parseFloat((totalPrice * 0.05).toFixed(2))).toFixed(2)}</h3>
            </div>
        </div>
    </div>
  )
}

export default Checkout