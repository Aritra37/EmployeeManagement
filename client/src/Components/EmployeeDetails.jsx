import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EmployeeDetails() {
    const {id}=useParams();
    const navigate=useNavigate();
    const [employee,setEmployee]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/get/"+id)
        .then(res=>setEmployee(res.data.Result[0]))
        .catch(err=>console.log(err));
    })
      const handleLogout = () => {
        axios
          .get("http://localhost:8000/logout")
          .then((res) => {
            navigate("/start");
          })
          .catch((err) => console.log(err));
      };
  return (
    <div>
      <div className="d-flex justfigy-content-center flex-column align-items-center mt-3">
        <div className='d-flex align-items-center flex-column mt-3'>
          <h3>Name: {employee?.name}</h3>
          <h3>Email:{employee?.email}</h3>
          <h3>Contact No:{employee?.contact}</h3>
          <h3>Department:{employee?.department}</h3>
          <h3>Joining Date:{employee?.joiningdate}</h3>
        </div>
        <div>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails