import React, { useState } from 'react'
import axios from 'axios'; 
function AddEmployee() {
    const [data,setData]=useState({
        name:'',
        email:'',
        contact:'',
        department:'',
        joiningdate:'',
        password:''
    })

    const handleSubmit=(event)=>{
        event.preventDefault();
        const formdata=new FormData();
        formdata.append("name",data.name);
        formdata.append("email",data.email);
        formdata.append("contact",data.contact);
        formdata.append("department",data.department);
        formdata.append("joiningDate",data.joiningdate);
        formdata.append("password",data.password);
        axios.post('http://localhost:8000/create',formdata)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }
  return (
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Add Employee</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label for="inputName" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="inputName"
            placeholder="Enter Name"
            autoComplete="off"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label for="inputEmail" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="Enter Email"
            autoComplete="off"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label for="inputContact" class="form-label">
            Contact
          </label>
          <input
            type="integer"
            class="form-control"
            id="inputContact"
            placeholder="Enter Contact Number"
            autoComplete="off"
            onChange={(e) => setData({ ...data, contact: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label for="inputDepartment" class="form-label">
            Department
          </label>
          <input
            type="text"
            class="form-control"
            id="inputDepartment"
            placeholder="Enter Department"
            autoComplete="off"
            onChange={(e) => setData({ ...data, department: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label for="inputJoining" class="form-label">
            Joining Date
          </label>
          <input
            type="date"
            class="form-control"
            id="inputJoining"
            placeholder="Enter Joining Date"
            autoComplete="off"
            onChange={(e) => setData({ ...data, joiningdate: e.target.value })}
          />
        </div>
        <div className="col-12">
          <label for="inputPassword" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Enter Password"
            autoComplete="off"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee