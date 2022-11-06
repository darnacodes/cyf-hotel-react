import { useState } from "react";
import RestaurantButton from "./components/RestaurantButton";

const Order = ({ OrderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li>
      {OrderType} {orders}
      <RestaurantButton orderOneUpdate={orderOne} />
    </li>
  );
};

export default Order;
