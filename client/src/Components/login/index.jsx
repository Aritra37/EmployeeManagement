import React from "react";
import axios from "axios";

import "./index.scss";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  LogInAction,
  SetEmailAction,
  SetAdminAction,
  RemoveAdminAction,
  SetMobileAction,
  SetPasswordAction,
  SetNameAction,
} from "../actions.js";

function Login() {
  var [password, setPassword] = React.useState("");
  var [email, setEmail] = React.useState("");
  let resp = [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sendData = async (e) => {
    e.preventDefault()
    const data = { email, password };
    console.log(data);
    const response = await axios
      .post("http://localhost:9000/login/signin", data)
      .then((res)=>{
        console.log(res)
        resp = res;
      }).catch((err)=>{
        console.log(err)
      })
    if (resp.status !=200) {
      alert("Wrong Credentials");
    } else {
      console.log(resp)
      dispatch(LogInAction());
      dispatch(SetEmailAction(email));
      dispatch(SetMobileAction(resp.data.contact));
      dispatch(SetNameAction(resp.data.name));
      dispatch(SetPasswordAction(resp.data.password));
      if (resp.data.admin === true) {
        dispatch(SetAdminAction());
        navigate("/admin");
      } else {
        dispatch(RemoveAdminAction());
        navigate("/employee");
      }
    }
  }
  return (
    <div className="form-page">
      <form action="" className="form">
        <h3>Welcome Back</h3>
        <br />
        <label htmlFor="email" className="emailLabel s2">
          Email
        </label>
        <br />
        <input
          type="email"
          id="email"
          className="emailInput"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password" className="password-label s2">
          Password
        </label>
        <br />
        <input
          required={true}
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          className="password-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={sendData} className="submitButton button">
          Login To Tracker
        </button>
      </form>
    </div>
  );
}
export default Login;
