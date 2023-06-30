import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import "./allEmployees.scss";
import "./index.scss";
import DeleteButton from "./deleteEmployee";

function ShowAllData(props) {
  const data=props.props;
  const [deleteShow, setDeleteShow] = React.useState(false);
  const [idSelected, setIdSelected] = React.useState([]);
  const toPass = {
    idSelected,
    setDeleteShow,
  };

  return (
    <div className="allEmployees">
      <table className="content-table">
        <thead className="s1">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Department</th>
            <th>Joining Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr className="b2" key={employee._id}>
              <td>
                <button
                  className="BtnName b2"
                  onClick={(e) => {
                    e.preventDefault();
                    props.setEmployeeDateShown(true);
                    props.setEmployeeIdSelected(employee.email);
                  }}
                >
                  <u>{employee.name}</u>
                </button>
              </td>
              <td>{employee.email}</td>
              <td>{employee.contact}</td>
              <td>{employee.department}</td>
              <td>{employee.joining.slice(0, 10)}</td>
              <td>
                <button
                  onClick={(e) => {
                    setIdSelected(employee.email);
                    setDeleteShow(true);
                  }}
                >
                  {" "}
                  <MdDelete size={25} color="#F21B3F" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deleteShow && <DeleteButton props={toPass} />}
    </div>
  );
}

export default ShowAllData;
