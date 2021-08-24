import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Home.scss";

function Home() {
  const { username, email, img_url } = useSelector(
    (state) => state.user.userData
  );
  const [shuffle_url, setShuffle_url] = useState(0);
  const urls = [
    "https://cdn.dribbble.com/users/1787323/screenshots/15456036/media/ded7236924639bc47da6f09c98b3db9e.png?compress=1&resize=1200x900",
    "https://cdn.dribbble.com/users/1787323/screenshots/15456036/media/e28f6e2fde87a0aec79a8fd6701ccf54.png?compress=1&resize=1200x900",
    "https://cdn.dribbble.com/users/1787323/screenshots/15456036/media/30439783d551162eda99c834198543b1.png?compress=1&resize=1200x900",
    "https://cdn.dribbble.com/users/1787323/screenshots/15456036/media/77cd25d1e76e227fa7bd1070aa15cea9.png?compress=1&resize=1200x900",
    "https://cdn.dribbble.com/users/1787323/screenshots/15456036/media/52498a684432081e8bec568acc290466.png?compress=1&resize=1200x900",
    "https://cdn.dribbble.com/users/1787323/screenshots/15456036/media/56b428c18dc46626b405149b7f237b48.png?compress=1&resize=1200x900",
  ];
  useEffect(() => {
    setInterval(() => {
      setShuffle_url(Math.floor(Math.random() * urls.length));
    }, 15000);
  }, []);

  return (
    <div className="home">
      <div className="hero">
        <img src={img_url ? img_url : urls[shuffle_url]} alt="home" />
        <section>
          <div>
            <h3>Hi {username}</h3>
            <Link to="/settings">
              <span>
                <SettingsIcon />
              </span>
            </Link>
          </div>

          <h5>{email}</h5>
        </section>
      </div>
      <div className="analytics">
        {img_url ? (
          <section>
            <h4>you have: </h4>
            <Link to="/orders">
              <h5>10 Orders in total</h5>
            </Link>
            <Link to="/menu">
              <h5>8 Dishes in your menu</h5>
            </Link>
          </section>
        ) : (
          <Link to="settings">
            <h4>Continue setting up your restaurant...</h4>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
