import React, { useState } from "react";
import Order from "../Order";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order OrderType="pizzas" />
        <Order OrderType="salad" />
        <Order OrderType="chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
