import React from "react";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Employee from "./Components/Employee";
import Profile from "./Components/Profile";
import Home  from "./Components/Home";
import AddEmployee from "./Components/AddEmployee";
import Start from "./Components/Start";
import EmployeeDetails from "./Components/EmployeeDetails";
import EmployeeLogin from "./Components/EmployeeLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/create" element={<AddEmployee />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/start" element={<Start />}></Route>
        <Route path="/employeelogin" element={<EmployeeLogin />}></Route>
        <Route path="/employeedetails/:id" element={<EmployeeDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
