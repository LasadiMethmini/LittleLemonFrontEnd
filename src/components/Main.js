import "../App.css";
import img from "../icons_assets/restauranfood.jpg";
import dish1_img from "../icons_assets/greek salad.jpg";
import dish2_img from "../icons_assets/bruchetta.svg";
import dish3_img from "../icons_assets/lemon dessert.jpg";
import BookingForm from "./BookingForm";
import React, { useState } from "react";

const Main = () => {
  /*Setup State in the Main Component:to track the forms are visible or not */
    const [showForm, setShowForm] = useState(false);
    const handleReserveClick = () => {
      setShowForm(true);
    };
  

  return (
    <div className="Main">
      {showForm ? (
        <BookingForm />
      ) : (
        <div className="aboutSection">
          <section className="sec1">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              We are a family-owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button onClick={handleReserveClick}>Reserve a Table</button>
          </section>
          <section className="sec2">
            <img src={img} alt="food" />
          </section>
        </div>
      )}
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
              <a href="/booking" className="delivery-link">
                <b>Order a delivery </b>
              </a>
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
              <a href="/booking" className="delivery-link">
                <b>Order a delivery </b>
              </a>
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
              <a href="/booking" className="delivery-link">
                <b>Order a delivery </b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
