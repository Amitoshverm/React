import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  //   const btn = "Login";

  const [btn, setBtn] = useState("Login");

  // useEffect(() => console.log("useEffect called"), [btn]);

  const getStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-orange-100 shadow-lg">
      <div className="logo-container">
        <img className="logo w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-6">
          <li className="px-4">Status: {getStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Groceries</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">Cart</li>
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
