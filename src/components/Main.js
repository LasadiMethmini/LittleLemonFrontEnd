import "../App.css";
import img from "../icons_assets/restauranfood.jpg";
import dish1_img from "../icons_assets/greek salad.jpg";
import dish2_img from "../icons_assets/bruchetta.svg";
import dish3_img from "../icons_assets/lemon dessert.jpg";

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [date, setDate] = useState(''); // State for the selected date
  const [availableTimes, setAvailableTimes] = useState([]); // State for available times

  const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    return await window.fetchAPI(today); // Use window.fetchAPI to access the global function
  };

  const updateTimes = async (selectedDate) => {
    return await window.fetchAPI(selectedDate); // Use window.fetchAPI to access the global function
  };

  // Fetch initial available times on component mount
  useEffect(() => {
    const fetchInitialTimes = async () => {
      const times = await initializeTimes(); // Fetch initial available times
      setAvailableTimes(times);
    };

    fetchInitialTimes();
  }, []);

  // Handle date change and update available times
  const handleDateChange = async (newDate) => {
    setDate(newDate);
    const times = await updateTimes(newDate); // Fetch new available times
    setAvailableTimes(times);
  };

  // Function to navigate to the booking page
  const goToBookingPage = () => {
    navigate("/booking"); // Navigate to the booking page
  };

  return (
    <div className="Main">
      <div className="aboutSection">
        <section className="sec1">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button onClick={goToBookingPage}>Reserve a Table</button>
          <input
            type="date"
            value={date}
            onChange={(e) => handleDateChange(e.target.value)} // Call handleDateChange on date input change
          />
          
          {/* Display available times */}
          <div>
            <h3>Available Times:</h3>
            <ul>
              {availableTimes.map((time, index) => (
                <li key={index}>{time}</li> // Render available times
              ))}
            </ul>
          </div>
        </section>
        <section className="sec2">
          <img src={img} alt="food" />
        </section>
      </div>

      <div className="banner">
        <div className="mainHeader">
          <h2>This week's specials!</h2>
          <button>Online menu</button>
        </div>
        <div className="container">
          <div className="dish">
            <img src={dish1_img} alt="Greek salad" />
            <div className="dishTitle">
              <h4 className="dishName">Greek salad</h4>
              <h4 className="pricetag">$12.99</h4>
            </div>
            <div className="desc">
              The famous Greek salad of crispy lettuce, peppers, olives and our
              Chicago-style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </div>
            <div className="bottom-text">
              <Link to="/booking" className="delivery-link">
                <b>Order a delivery </b>
              </Link>
            </div>
          </div>

          <div className="dish">
            <img src={dish2_img} alt="Bruschetta" />
            <div className="dishTitle">
              <h4 className="dishName">Bruschetta</h4>
              <h4 className="pricetag">$5.89</h4>
            </div>
            <div className="desc">
              Our Bruschetta is made from grilled bread that has been smashed
              with garlic and seasoned with salt and olive oil.
            </div>
            <div className="bottom-text">
              <Link to="/booking" className="delivery-link">
                <b>Order a delivery </b>
              </Link>
            </div>
          </div>

          <div className="dish">
            <img src={dish3_img} alt="Lemon Dessert" />
            <div className="dishTitle">
              <h4 className="dishName">Lemon Dessert</h4>
              <h4 className="pricetag">$5.00</h4>
            </div>
            <div className="desc">
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and authentic as can be imagined.
            </div>
            <div className="bottom-text">
              <Link to="/booking" className="delivery-link">
                <b>Order a delivery </b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
