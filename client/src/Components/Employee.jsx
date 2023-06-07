import axios from 'axios';
import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom';

function Employee() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/getEmployee")
      .then((res) => {
        if (res.data.Status === "Success") {
          setdata(res.data.Result);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

const handleDelete=(id)=>{
    axios.delete("http://localhost:8000/delete/"+id)
    .then(res => {
        if (res.data.Status === "Success") {
          window.location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="px-5 py-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/create" className="btn btn-success">
        Add Employee
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Department</th>
              <th>Joining Date</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.contact}</td>
                  <td>{employee.department}</td>
                  <td>{employee.joiningdate}</td>
                  <td>{employee.password}</td>
                  <td>
                    <button onClick={e=>handleDelete(employee.id)}
                      className="btn btn-sm btn-danger"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;