import React, { useState } from "react";
import "./UpdateModal.scss";

function UpdateModal({ name, order, setShowUpdateModal }) {
  const [menuName, setMenuName] = useState("");
  const [menuPrice, setMenuPrice] = useState(0);
  const [menuImg, setMenuImg] = useState("");
  const [sending, setSending] = useState(false);
  const [info, setInfo] = useState("sending");

  const updateMenu = () => {
    const name = menuName ? menuName : order.name;
    const price = menuPrice ? menuPrice : order.price;
    const id = order._id;
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setSending(true);
    const response = updateMenu();
    setInfo(response);

    setShowUpdateModal(false);
  };

  return (
    <div className="updatemodal Modal">
      {name ? (
        <form>
          <input
            type="text"
            placeholder={order.name}
            onChange={(e) => setMenuName(e.target.value)}
            value={menuName}
          />
          <input
            type="number"
            placeholder={order.price}
            onChange={(e) => setMenuPrice(e.target.value)}
            value={menuPrice}
          />
          <input
            type="file"
            onChange={(e) => setMenuImg(e.target.value)}
            value={menuImg}
          />

          <img src={order.img_url} alt="" />
          <div>
            <button onClick={() => setShowUpdateModal(false)}>cancel</button>
            <button onClick={handleUpdate}>update</button>
          </div>
        </form>
      ) : (
        <form></form>
      )}
    </div>
  );
}

export default UpdateModal;
