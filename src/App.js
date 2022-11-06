import React from "react";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./components/Bookings";
import Restaurant from "./components/Restaurant";
import "./App.css";
import FooterInfo from "./components/Footer";
import RestaurantButton from "./components/RestaurantButton";

const hotelContactInfo = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <FooterInfo hotelContactInfo={hotelContactInfo} />
    </div>
  );
};

export default App;
