import React from "react";
import Orderlist from "./Orderlist";
import "./Orders.scss";
import Navbar from "../components/Navbar";

function Orders() {
  return (
    <div className="orders">
      <Navbar />
      <h3>Order History</h3>
      <div>
        <li>All Order</li>
        <li>Cooking</li>
        <li>Transit</li>
        <li>Cancelled</li>
        <li>Completed</li>
      </div>

      <Orderlist inputList={[]} />
    </div>
  );
}

export default Orders;
