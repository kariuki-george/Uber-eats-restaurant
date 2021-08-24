import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { clearState } from "../state/reducers/authSlice";
import { register } from "../services/auth";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { isError, isSuccess, errorMessage } = useSelector(
    (state) => state.user
  );
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      return alert("password is not the same as confirm password");
    }
    if (name && email && password) {
      dispatch(register({ email, username: name, password }));
      return dispatch(clearState());
    }
    return alert("Ensure all fields are filled");
  };
  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
    if (isSuccess) {
      toast.success(errorMessage);
      history.replace("/login");
    }
  }, [isError, isSuccess]);

  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder=" username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleRegister}>register</button>
      </form>
      <h4>Have an account? {<Link to="/login">Login</Link>}</h4>
    </div>
  );
}

export default Register;
