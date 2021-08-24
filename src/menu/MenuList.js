import React, { useState, useEffect } from "react";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";
import "./MenuList.scss";
import { deleteFood } from "../services/menu";
import { clearState } from "../state/reducers/menuSlice";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
function MenuList({ menulist, showModal, setShowModal }) {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.menu);
  const [foodId, setFoodId] = useState({});

  useEffect(() => {
    setList(menulist);
  }, [menulist]);

  const handleUpdate = async (id) => {
    const foodList = menu.filter((food) => food._id === foodId);
    const food = foodList[0];

    toast.error("Sorry, Updates are not supported at the moment");
  };
  const handleDelete = (id) => {
    dispatch(clearState());
    dispatch(deleteFood(id));
    dispatch(clearState());
  };

  return (
    <div className="menulist">
      <ul>
        {list.map((food) => {
          return (
            <li key={food._id}>
              <img src={food.img_url} alt="" />
              <h3>{food.name}</h3>
              <h5>{food.price}</h5>
              <h6>{food.description}</h6>
              <div>
                <span onClick={() => handleUpdate(food._id)}>
                  <UpdateIcon />
                </span>
                <span onClick={() => handleDelete(food._id)}>
                  <DeleteIcon />
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <Modal
        foodId={foodId}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default MenuList;
