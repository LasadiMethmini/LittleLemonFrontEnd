// App.js
import React, { useState, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Header from './components/Header';
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";

// Initialize available times
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Reducer function to update available times
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same times regardless of the date
      // Future logic can adjust times based on action.date
      return initializeTimes();
    default:
      return state;
  }
};

const App = () => {

  // Lifted states for BookingForm
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  // useReducer for availableTimes
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  // Function to handle date change and update available times
  const handleDateChange = (newDate) => {
    setDate(newDate);
    dispatch({ type: 'UPDATE_TIMES', date: newDate });
  };

  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/booking"
          element={
            <BookingForm
              date={date}
              handleDateChange={handleDateChange}
              time={time}
              setTime={setTime}
              guests={guests}
              setGuests={setGuests}
              occasion={occasion}
              setOccasion={setOccasion}
              availableTimes={availableTimes}
            />
          }
        />
      </Routes>
    </Router>
    <Footer />

    </>
  );
};

export default App;
