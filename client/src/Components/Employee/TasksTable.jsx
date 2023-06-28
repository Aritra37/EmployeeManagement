import React from "react";
import "./TasksTable.scss";
import "./index.scss";

function AllTasks(props) {
  const data = props.props;
  const today = props.dateFor;
  console.log(data)
  const newArr = [];
  if (typeof today != "string") {
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
  }
  for (var i = 0; i < data.length; i++) {
    if (today === data[i].start.slice(0, 10)) {
      newArr.push(data[i]);
    }
  }
  return (
    <div className="tasklist">
      <table className="task-data">
        <thead className="s2">
          <tr>
            <th>Task Type</th>
            <th>Task Description</th>
            <th>Start Time</th>
            <th>Time Taken</th>
          </tr>
        </thead>
        <tbody>
          {newArr.map((task) => (
            <tr key={task._id}>
              <td>{task.type}</td>
              <td>{task.description}</td>
              <td>
                {task.start == null ? " 00:00:00" : task.start.slice(11, 19)}
              </td>
              <td>{task.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllTasks;
