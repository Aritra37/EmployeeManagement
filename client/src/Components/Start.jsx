import React, { useState } from "react";

function Start() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <h2>You will be logging as?</h2>
        <div className="d-flex justify-content-around mt-3">
            <button className="btn btn-primary">Employee</button>
            <button className="btn btn-success">Admin</button>
        </div>
      </div>
    </div>
  );
}

export default Start;
