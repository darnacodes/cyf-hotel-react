import React from "react";
import Restaurant from "./Restaurant";

const RestaurantButton = props => {
  const handleOrder = props.orderOneUpdate;
  return (
    <button className="btn btn-primary btn-add" onClick={handleOrder}>
      Add
    </button>
  );
};

export default RestaurantButton;
