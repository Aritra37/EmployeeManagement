import React from "react";
import Navbar from "../navbar";
import Login from "../login";
import AdminDashBoard from "../admin";
import EmployeeDashboard from "../Employee";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Layout() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="" element={<Login></Login>}></Route>
          <Route
            exact
            path="/admin"
            element={<AdminDashBoard></AdminDashBoard>}
          ></Route>
          <Route
            exact
            path="/employee"
            element={<EmployeeDashboard></EmployeeDashboard>}
          >
            {" "}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
