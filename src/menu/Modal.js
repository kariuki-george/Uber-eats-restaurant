import React, { useState } from "react";
import "./Modal.scss";
import Axios from "axios";
import Notification from "../components/Notification";

function Modal({ closeModal, handleClose }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");
  const [sending, setSending] = useState(false);
  const [info, setInfo] = useState("sending");

  const uploadImage = async () => {
    try {
      const data = new FormData();
      data.append("file", img);
      data.append("upload_preset", "smiley");
      data.append("cloud_name", "smiley-geek");

      const response = await Axios.post(
        process.env.REACT_APP_CLOUDINARY_URL,
        data
      );

      return response.data.secure_url;
    } catch (error) {
      return "error";
    }
  };

  const uploadnewFood = async () => {
    try {
      const data = {
        name,
        price,
        restaurant_id: "610a582f4dad423177e80db6",
        img_url: url,
      };

      const response = await Axios.post(
        `${process.env.REACT_APP_API_URL}restaurant/addFood`,
        data
      );

      return response.data;
    } catch (error) {
      console.log("error");
    }
  };

  const notification = () => {
    setTimeout(() => {
      setSending(false);
      setInfo("sending");
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && img && price) {
    } else {
      return alert("Ensure you have filled all the fields");
    }
    setSending(true);
    const response = await uploadImage();
    if (response === "error") {
      setInfo("An error occured. Please check your image and try again");
      return notification();
    }
    setUrl(response);

    const res = await uploadnewFood();
    if (res === "error") {
      setInfo(
        "An error occured. Please check your details or network and try again"
      );
      return notification();
    }

    const tttt = res;
    if (tttt !== "Created successfully") {
      setInfo("Error: The name given to food is already taken");
      return notification();
    }

    setInfo(tttt);
    notification();
    return;
  };

  return (
    !closeModal && (
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
          <input
            type="file"
            src=""
            alt=""
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
          />
          <div className="div">
            <button onClick={handleClose}>cancel</button>
            <button onClick={handleSubmit}>add</button>
          </div>
        </form>
        {sending && <Notification info={info} />}
      </div>
    )
  );
}

export default Modal;
