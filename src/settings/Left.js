import React, { useState, useEffect } from "react";
import "./Left.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/auth";
function Left() {
  const { email, username, img_url } = useSelector(
    (state) => state.user.userData
  );

  const [update, setUpdate] = useState(false);
  const [newName, setNewName] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newImg_url, setNewImg_url] = useState("");
  const [cloud_img_url, setCloud_img_url] = useState("");
  const [newCounty, setNewCounty] = useState("");
  const [newArea, setNewArea] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setUpdate(false);
  };
  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <div className="left">
      <div className="account">
        <h3>Settings</h3>
        <h4>Account</h4>
        <div className="account-div">
          <img src={img_url} alt="" />
          <div>
            <h2>{username}</h2>
            <h5 style={{ fontWeight: "300" }}>
              Not you? <strong onClick={handleSignOut}>Change user</strong>
            </h5>
          </div>
        </div>

        <label htmlFor="">Username</label>
        <input
          type="text"
          value={newName}
          onChange={(e) => {
            setUpdate(true);

            setNewName(e.target.value);
          }}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => {
            setUpdate(true);
            setNewEmail(e.target.value);
          }}
        />
        <label htmlFor="">Image or Image Url</label>
        <input
          type="file"
          onChange={(e) => {
            setUpdate(true);
            setCloud_img_url(e.target.value);
          }}
        />
        <input
          type="url"
          value={newImg_url}
          onChange={(e) => {
            setNewImg_url(e.target.value);
            setUpdate(true);
          }}
        />
        <label htmlFor="">Address</label>
        <input
          type="text"
          value={newCounty}
          onChange={(e) => {
            setUpdate(true);
            setNewCounty(e.target.value);
          }}
        />
        <input
          type="text"
          value={newArea}
          onChange={(e) => {
            setUpdate(true);
            setNewArea(e.target.value);
          }}
        />
        {update && <button onClick={handleSubmit}>update</button>}
      </div>
    </div>
  );
}

export default Left;
