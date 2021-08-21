import React from "react";
import Left from "./Left";
import Right from "./Right";
import "./Settings.scss";
function Settings() {
  return (
    <div className="settings">
      <Left></Left>
      <Right />
    </div>
  );
}

export default Settings;
