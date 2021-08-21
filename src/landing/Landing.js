import React from "react";
import { useHistory } from "react-router-dom";
import "./Landing.scss";

function Landing() {
  const history = useHistory();
  const handleSignIn = () => {
    history.push("/login");
  };
  const handleSignUp = () => {
    history.push("/register");
  };
  return (
    <div className="landing">
      <form action="">
        <h4>Create Your Restaurant</h4>
        <h4>Manage your restaurant</h4>
        <h5>Work with us</h5>
        <div>
          <button onClick={handleSignIn}>Sign In</button>
          <button onClick={handleSignUp}>Get Started</button>
        </div>
      </form>
    </div>
  );
}

export default Landing;
