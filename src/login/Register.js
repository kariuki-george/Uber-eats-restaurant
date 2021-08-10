import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      return alert("password is not the same as confirm password");
    }
    if (name && email && password) {
      const response = await Axios.post(
        `${process.env.REACT_APP_API_URL}/register`,
        {
          username: name,
          email,
          password,
        }
      );

      if (response.data === "hello") {
        alert("Account created Successfully");
        return history.replace("/login");
      } else {
        const { email, username } = response.data;

        return alert(`${email ? email : password} is already taken`);
      }
    }
    return alert("Ensure all fields are filled");
  };

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
