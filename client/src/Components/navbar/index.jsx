import React from "react";
import "./index.scss";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LogOutAction } from "../actions.js";
function Navbar() {
  var isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogClick(event) {
    event.preventDefault();
    if (isLoggedIn) {
      // console.log(" we here ");
      dispatch(LogOutAction());
      navigate("/");
    } else {
      navigate("/");
    }
  }

  return (
    <nav className="nav">
      <div className="logos">
        <div className="singleElement">
          <h2>Tracker</h2>
        </div>
      </div>
      <div className="display-mode">
        <button onClick={handleLogClick} className="LogButton button">
          {isLoggedIn ? "LogOut" : "LogIn"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
