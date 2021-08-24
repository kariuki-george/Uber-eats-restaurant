import React, { useState, useEffect } from "react";
import "./Modal.scss";
import { addFood, deleteFood, updateFood } from "../services/menu";
import Axios from "axios";
import toast from "react-hot-toast";
import { clearState } from "../state/reducers/menuSlice";
import { useSelector, useDispatch } from "react-redux";
import uploadImage from "../services/image";

function Modal({ showModal, setShowModal, foodId }) {
  const [name, setName] = useState(foodId ? foodId.name : "");
  const [price, setPrice] = useState(foodId ? foodId : 0);
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");
  const [img_Url, setImg_Url] = useState(foodId ? foodId.img_Url : "");

  const [desc, setDesc] = useState("");
  const { isError, isSuccess, errorMessage } = useSelector(
    (state) => state.menu
  );
  const { userData } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await uploadImage(img);

    img_Url ? setUrl(img_Url) : setUrl(res);
    img_Url ? setUrl(img_Url) : setUrl(res);

    if (url === "error") {
      return toast.error("Check your network or the image file");
    }

    if (name && url && price && desc) {
      dispatch(clearState());
      return dispatch(
        addFood({
          restaurant_id: userData._id,
          name,
          price,
          img_url: url,
          desc,
        })
      );
    } else {
      toast.error("Ensure required fields are filled");
    }
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully added");
      setShowModal(false);
      dispatch(clearState());
    }
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isError, isSuccess]);

  return (
    showModal && (
      <div className="modal">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="new food"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="number"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
            placeholder="price"
          />
          <label htmlFor="">
            Paste image link below or choose an image from your computer
          </label>
          <input
            type="url"
            name=""
            id=""
            onChange={(e) => {
              setImg_Url(e.target.value);
            }}
            value={img_Url}
            placeholder="image url(optional)"
          />
          <input
            type="file"
            src=""
            alt=""
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
          />
          <label htmlFor="">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Tell us something about the dish"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            value={desc}
          ></textarea>
          <div className="div">
            <button onClick={() => setShowModal(false)}>cancel</button>
            <button onClick={handleSubmit}>send</button>
          </div>
        </form>
      </div>
    )
  );
}

export default Modal;
