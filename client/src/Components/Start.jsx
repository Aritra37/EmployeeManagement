import React from "react";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate=useNavigate()
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <h2>You will be logging as?</h2>
        <div className="d-flex justify-content-around mt-3">
            <button className="btn btn-primary" onClick={e=>navigate('/employeelogin')}>Employee</button>
            <button className="btn btn-success" onClick={e=>navigate('/login')}>Admin</button>
        </div>
      </div>
    </div>
  );
}

export default Start;
