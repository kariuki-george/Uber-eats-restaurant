import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const { username, email } = useSelector((state) => state.user.user);
  return (
    <div>
      <div className="hero">
        <h3>Hi {username}</h3>
        <h5>{email}</h5>
      </div>
      
    </div>
  );
}

export default Home;
