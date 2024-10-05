import React from 'react';
import "../App.css";

const BookingForm = ({ date, handleDateChange, availableTimes }) => {
  return (
    <div>
      <h2>Book Now</h2>
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label htmlFor="res-date">Choose date</label>
        <input 
          type="date" 
          id="res-date" 
          onChange={(e) => handleDateChange(e.target.value)} 
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time">
          {availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
