import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  //   const btn = "Login";

  const [btn, setBtn] = useState("Login");

  // useEffect(() => console.log("useEffect called"), [btn]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}>
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
