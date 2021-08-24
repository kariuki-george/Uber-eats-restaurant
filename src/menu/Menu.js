import React, { useState, useEffect } from "react";
import MenuList from "./MenuList";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { getFood, updateFood, deleteFood } from "../services/menu";
import { clearState } from "../state/reducers/menuSlice";

import "./Menu.scss";

function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [menulist, setMenulist] = useState([]);
  const { menu } = useSelector((state) => state.menu);
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    dispatch(clearState());
    menu && dispatch(getFood({ restaurant_id: userData._id }));
  }, []);

  useEffect(() => {
    setMenulist(menu);
  }, [menu]);

  return (
    <div className="menu">
      <header>
        <span>Your menu</span>
        <div>
          <button onClick={handleClose}>
            {showModal ? "Cancel" : "Add food"}
          </button>
          <button
            onClick={() => dispatch(getFood({ restaurant_id: userData._id }))}
          >
            refresh
          </button>
        </div>
      </header>
      <MenuList
        menulist={menulist}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Menu;
