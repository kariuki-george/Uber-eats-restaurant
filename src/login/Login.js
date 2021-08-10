import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.scss";
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email && password) {
      const response = await Axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        {
          email,
          password,
        }
      );
      if (response.data === "User not found") {
        return alert("Email not found");
      } else if (response.data === "Wrong email or password") {
        return alert("Wrong email or password");
      } else if (response.data === "error") {
        return alert("Server error. Please try again");
      } else {
        setRestaurantDetails(response.data);
        alert("Logged In Successfully");
        return history.replace("/");
      }
    }
    return alert("Ensure all fields are filled");
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder=" email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder=" password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>login</button>
      </form>
      <h4>Don't have an account? {<Link to="/register">Register</Link>}</h4>
    </div>
  );
}

export default Login;
