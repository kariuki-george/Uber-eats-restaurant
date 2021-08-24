import React from "react";
import "./Sidebar.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TimelineIcon from "@material-ui/icons/Timeline";
import { setDark, setLight } from "../state/reducers/themeSlice";

function Sidebar() {
  const { theme } = useSelector((state) => state.theme);
  const { isLoggedIn } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleTheme = () => {
    if (theme === ".light") {
      localStorage.setItem("theme", ".dark");
      dispatch(setDark());
    } else {
    }
    localStorage.setItem("theme", ".light");
    dispatch(setLight());
  };
  const handleRouting = (to) => {
    history.push(to);
  };
  const handleLogout = () => {};

  return (
    <div className="sidebar">
      <img
        onClick={() => handleRouting("/")}
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
        alt=""
      />

      {isLoggedIn && (
        <div>
          <div onClick={() => handleRouting("/orders")}>
            <span>
              <FastfoodIcon />
            </span>
            <h4>orders</h4>
          </div>
          <div onClick={() => handleRouting("/menu")}>
            <span>
              <RestaurantMenuIcon />
            </span>
            <h4>menu</h4>
          </div>
          <div onClick={() => handleRouting("/statistics")}>
            <span>
              <TimelineIcon />
            </span>
            <h4>statistics</h4>
          </div>

          <div onClick={() => handleRouting("/settings")}>
            <span>
              <SettingsIcon />
            </span>
            <h4>settings</h4>
          </div>
          <div onClick={() => handleLogout("/settings")}>
            <span>
              <ExitToAppIcon />
            </span>
            <h4>logout</h4>
          </div>
        </div>
      )}
      {isLoggedIn && (
        <div className="theme">
          <h5>Theme</h5>
          <div onClick={handleTheme}></div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
