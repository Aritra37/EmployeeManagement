import React, { useState } from "react";
import './index.css';
import axios from 'axios';
function Login(){
    const [values, setValues] = useState({
        username:'',
        password:''
    })

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('')
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">
              <strong>username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Log in
          </button>
          <p>You agree to our terms and conditions</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
