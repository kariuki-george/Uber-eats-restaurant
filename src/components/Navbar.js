import React from "react";
import "./Navbar.scss";

function Navbar() {
  const handleWorking = () => {};
  return (
    <div className="navbar">
      <div>
        <h4>Open For Order</h4>
        <div
          style={{ backgroundColor: `${"green"}` }}
          onClick={handleWorking}
        ></div>
      </div>
      <div>
        <img src="" alt="" />
        <h5>Ndua </h5>
      </div>
    </div>
  );
}

export default Navbar;
