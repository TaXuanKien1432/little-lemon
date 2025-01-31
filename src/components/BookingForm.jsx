import React, { useState } from 'react'
import Popup from './Popup';

const BookingForm = () => {
    const [bookingValues, setBookingValues] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        occasion: "",
        specialRequests: "",
    })

    const [errors, setErrors] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        date: "",
        time: "",
        guests: "",
    });

    const today = new Date().toISOString().split("T")[0];

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const validateField = (name, value) => {
        let error = "";
    
        if (name === "name") {
            if (!value) {
                error = "Name is required";
            } else if (!/^[a-zA-Z\s'-]+$/.test(value)) {
                error = "Name is not valid";
            }
        }

        if (name === "phoneNumber") {
            if (!value) {
                error = "Phone number is required";
            } else if (!/^\+?[1-9]\d{1,14}$/.test(value)) {
                error = "Phone number is not valid";
            }
        }

        if (name === "email") {
            if (!value) {
                error = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                error = "Email is not valid";
            }
        }
        
        if (name === "date") {
          if (!value) {
            error = "Date is required";
          } else if (!/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value)) {
            error = "Date is not valid";
          }
        }
    
        if (name === "time") {
          if (!value) {
            error = "Time is required";
          }
        }
    
        if (name === "guests") {
            if (!value) {
              error = "Number of guests is required";
            }
        }
        return error;
      };
    
    const validate = () => {
        let valid = true;
        if (!bookingValues.name || !bookingValues.phoneNumber || !bookingValues.email || !bookingValues.date || !bookingValues.time || !bookingValues.guests || !/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(bookingValues.date) || !/^[a-zA-Z\s'-]+$/.test(bookingValues.name) || !/^\+?[1-9]\d{1,14}$/.test(bookingValues.phoneNumber) || !/\S+@\S+\.\S+/.test(bookingValues.email)) {
            valid = false;
        };

        return valid;
    }
    
    const handleChange = (e) => {
        setBookingValues({
            ...bookingValues,
            [e.target.name]: e.target.value,
        })
        const fieldError = validateField(e.target.name, e.target.value);
        setErrors({...errors, [e.target.name]: fieldError});
    }

    const handleBlur = (e) => {
        const fieldError = validateField(e.target.name, e.target.value);
        setErrors({...errors, [e.target.name]: fieldError});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setBookingValues({
            name: "",
            phoneNumber: "",
            email: "",
            date: "",
            time: "",
            guests: "",
            occasion: "",
            specialRequests: "",
        })
        setIsPopupOpen(true);
    }
  
    return (
    <form className="booking-form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="res-name">Name <p className="asterisk">*</p></label>
            <input id="res-name" onChange={handleChange} onBlur={handleBlur} name="name" value={bookingValues.name} placeholder="Enter your name"></input>
            {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
            <label htmlFor='res-phone'>Phone Number <p className="asterisk">*</p></label>
            <input id="res-phone" type="tel" onChange={handleChange} onBlur={handleBlur} name="phoneNumber" value={bookingValues.phoneNumber} placeholder="123456789"></input>
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        </div>
        <div>
            <label htmlFor='res-email'>Email <p className="asterisk">*</p></label>
            <input type="email" id='res-email' onChange={handleChange} onBlur={handleBlur} name="email" value={bookingValues.email} placeholder="example@example.com" ></input>
            {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
            <label htmlFor="res-date">Booking Date <p className="asterisk">*</p></label>
            <input type="date" id="res-date" onChange={handleChange} onBlur={handleBlur} name="date" value={bookingValues.date} min={today}></input>
            {errors.date && <p className="error">{errors.date}</p>}
        </div>
        <div>
            <label htmlFor="res-time">Booking Time <p className="asterisk">*</p></label>
            <select id="res-time" onChange={handleChange} onBlur={handleBlur} name="time" value={bookingValues.time}>
                <option value="">Please Select</option>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            {errors.time && <p className="error">{errors.time}</p>}
        </div>
        <div>
            <label htmlFor="guests">Number of guests <p className="asterisk">*</p></label>
            <select id="guests" onChange={handleChange} onBlur={handleBlur} name="guests" value={bookingValues.guests}>
                <option value="">Please Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </select>
            {errors.guests && <p className="error">{errors.guests}</p>}
        </div>
        <div>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={handleChange} name="occasion" value={bookingValues.occasion}>
                <option value="">Please Select</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
            </select>
        </div>
        <div>
            <label htmlFor='requests'>Special Requests</label>
            <input id='requests' name="specialRequests" onChange={handleChange} value={bookingValues.specialRequests}></input>
        </div>
        <button type="submit" aria-label="On Click" disabled={!validate()}>Make your reservation</button>
        {isPopupOpen && <Popup message={"You have successfully made a table reservation!"} onClose={() => setIsPopupOpen(false)}/>}
    </form>
  )
}

export default BookingForm