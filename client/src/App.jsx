import React from "react";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Employee from "./Components/Employee";
import Home  from "./Components/Home";
import AddEmployee from "./Components/AddEmployee";
import Start from "./Components/Start";
import EmployeeDetails from "./Components/EmployeeDetails";
import EmployeeLogin from "./Components/EmployeeLogin";
import EmployeeDashboard from "./Components/EmployeeDashboard";
import AddTask from "./Components/AddTask";
import Home1 from "./Components/Home1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/create" element={<AddEmployee />}></Route>
        </Route>
        <Route path="/dash" element={<EmployeeDashboard />}>
          <Route path="/dash/home" element={<Home1 />}></Route>
          <Route path="/dash/addtask" element={<AddTask />}></Route>
          <Route
            path="/dash/employeedetails/:id"
            element={<EmployeeDetails />}
          ></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/start" element={<Start />}></Route>
        <Route path="/employeelogin" element={<EmployeeLogin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
