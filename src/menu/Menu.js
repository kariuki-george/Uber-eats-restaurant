import React, { useState, useEffect } from "react";
import Orderlist from "../orders/Orderlist";
import Modal from "./Modal";
import Axios from "axios";

function Menu() {
  const [closeModal, setCloseModal] = useState(true);
  const [menulist, setMenulist] = useState([]);

  const handleClose = () => {
    setCloseModal(!closeModal);
  };

  const getMenulist = async () => {
    try {
      const response = await Axios.post(
        `${process.env.REACT_APP_API_URL}restaurant/getFood`.toString(),
        { restaurant_id: "610a582f4dad423177e80db6" }
      );

      setMenulist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMenulist();
  }, []);

  return (
    <div>
      <header>
        <span>Your menu</span>
        <button onClick={handleClose}>
          {!closeModal ? "Cancel" : "Add food"}
        </button>
        <button onClick={getMenulist}>refresh</button>
      </header>

      <Orderlist name="menu" inputList={menulist} />
      <Modal closeModal={closeModal} handleClose={handleClose} />
    </div>
  );
}

export default Menu;
