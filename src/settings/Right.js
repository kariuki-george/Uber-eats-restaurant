import React from "react";
import "./Right.scss";
function Right() {
  return (
    <div className="right">
      <div className="preferences">
        <h4>Preferences</h4>
        <div>
          <input type="checkbox" name="" id="" />
          <h5>Play a sound when i get a notification</h5>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <h5>Send me a desktop notification</h5>
        </div>
      </div>
      <div className="blocked">
        <h4>Blocked Users</h4>
        <h6>
          Once a client is blocked, he/she can no longer see your restaurant on
          their client website nor your menu.
        </h6>
      </div>
    </div>
  );
}

export default Right;
