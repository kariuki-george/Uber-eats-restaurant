import React from "react";
import Orderlist from "./Orderlist";
import "./Orders.scss";

function Orders() {
  return (
    <div className="orders">
      <header>
        <span>Your orders</span>
        <button>refresh</button>
      </header>
      <Orderlist inputList={[]} />
    </div>
  );
}

export default Orders;
