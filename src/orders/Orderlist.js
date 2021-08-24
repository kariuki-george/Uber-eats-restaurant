import React, { useState, useEffect } from "react";
import "./Orderlist.scss";

import MoreVertIcon from '@material-ui/icons/MoreVert';

function Orderlist({ name, inputList }) {
  const [list, setList] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    setList(inputList);
  }, [inputList]);

  const handleDoubleClick = (name, order) => {
    setShowUpdateModal(!showUpdateModal);
    if (name) {
      setOrderDetails(order);
    }
  };
  const handleAction = () => {};

  return (
    <div className="orderlist">
      <ul>
        <li>
          <div className="id">id</div>
          <div className="name">Name</div>
          <div className="payment">Payment</div>
          <div className="type">Type</div>
          <div className="status">Status</div>
          <div className="total">Total</div>
          <div className="action">Action</div>
        </li>
        {list.map((order) => {
          return (
            <li key={order._id}>
              <div className="id">{order._id}</div>
              <div className="name">{order.buyerName}</div>
              <div className="payment">{order.Payment}</div>
              <div className="type">{order.Type}</div>
              <div className="status">{order.status}</div>
              <div className="total">{order.total}</div>
              <div className="action" onClick={handleAction}>
                <MoreVertIcon />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Orderlist;
