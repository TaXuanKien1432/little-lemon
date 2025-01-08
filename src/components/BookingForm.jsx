import React, { useState } from 'react'

const BookingForm = () => {
    const [bookingValues, setBookingValues] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
        specialRequests: "",
    })
    
    const handleChange = (e) => {
        setBookingValues({
            ...bookingValues,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  
    return (
    <form className="booking-form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={handleChange} name="date"></input>
        </div>
        <div>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={handleChange} name="time">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
        </div>
        <div>
            <label htmlFor="guests">Number of guests</label>
            <select id="guests" onChange={handleChange} name="guests">
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
        </div>
        <div>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={handleChange} name="occasion">
                <option>No special occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
            </select>
        </div>
        <div>
            <label htmlFor='request'>Special Requests</label>
            <input id='requests' name="specialRequests" onChange={handleChange}></input>
        </div>
        <button>Make your reservation</button>
    </form>
  )
}

export default BookingForm