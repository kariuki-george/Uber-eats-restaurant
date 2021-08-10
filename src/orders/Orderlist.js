import React, { useState, useEffect } from "react";
import "./Orderlist.scss";
import UpdateModal from "../menu/UpdateModal";

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

  return (
    <>
      {list.length === 0 ? (
        <div className="orderlist">
          <span>{name ? `no ${name}` : "no orders available"}</span>
        </div>
      ) : (
        <div className="orderlist">
          <ul>
            {list.map((order) => {
              return (
                <li
                  key={order._id}
                  onDoubleClick={() => {
                    handleDoubleClick(name, order);
                  }}
                >
                  <div>
                    <img src={order.img_url} alt="hello" />
                  </div>
                  <div>
                    <ol>
                      <li>Product: {order.name || order.food_name}</li>
                      <li>Amount: {order.food_amount || order.price}</li>
                      {order.createdAt && (
                        <li>Time: {order.createdAt.split("+")[0]}</li>
                      )}
                    </ol>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {showUpdateModal && (
        <UpdateModal
          name={name}
          order={orderDetails}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}
    </>
  );
}

export default Orderlist;
