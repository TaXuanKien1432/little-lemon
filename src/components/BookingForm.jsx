import React, { useState } from 'react'
import Popup from './Popup';

const BookingForm = () => {
    const [bookingValues, setBookingValues] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
        specialRequests: "",
    })

    const [errors, setErrors] = useState({
        date: "",
        time: "",
        guests: "",
    });

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const validateField = (name, value) => {
        let error = "";
    
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
        if (!bookingValues.date || !bookingValues.time || !bookingValues.guests || !/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(bookingValues.date)) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setBookingValues({
            date: "",
            time: "",
            guests: "",
            occasion: "",
            specialRequests: "",
        })
        setIsPopupOpen(true);
    }
    console.log(bookingValues)
  
    return (
    <form className="booking-form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="res-date">Choose date <p className="asterisk">*</p></label>
            <input type="date" id="res-date" onChange={handleChange} name="date" value={bookingValues.date}></input>
            {errors.date && <p className="error">{errors.date}</p>}
        </div>
        <div>
            <label htmlFor="res-time">Choose time <p className="asterisk">*</p></label>
            <select id="res-time" onChange={handleChange} name="time" value={bookingValues.time}>
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
            <select id="guests" onChange={handleChange} name="guests" value={bookingValues.guests}>
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
            <label htmlFor='request'>Special Requests</label>
            <input id='requests' name="specialRequests" onChange={handleChange} value={bookingValues.specialRequests}></input>
        </div>
        <button type="submit" disabled={!validate()}>Make your reservation</button>
        {isPopupOpen && <Popup message={"You have successfully made a table reservation!"} onClose={() => setIsPopupOpen(false)}/>}
    </form>
  )
}

export default BookingForm