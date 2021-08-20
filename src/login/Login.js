import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.scss";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../services/auth";
import { clearState } from "../state/reducers/authSlice";

import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const { isError, errorMessage, isSuccess } = useSelector(
    (state) => state.user
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(login({ email, password }));
      return dispatch(clearState());
    }
    return alert("Ensure all fields are filled");
  };
  useEffect(() => {
    if (isSuccess) {
      history.replace("/");
      dispatch(clearState());
    }
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isError, isSuccess]);

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
