import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import AddTaskButton from "./addTask";
import axios from "axios";
import AllTasks from "./TasksTable";
import EditProfile from "./editProfile";
import WeeklyEmployeeBar from "./weeklyEmployeeBar";
import TodayEmployee from "./todayEmployee";

function EmployeeDashboard() {
   const rightNow = new Date();
   const [addTaskShow, setAddTask] = React.useState(false);
   const [editProfileShow, setEditProfile] = React.useState(false);
   const isLoggedIn = useSelector((state) => state.isLoggedIn);
   const email = useSelector((state) => state.Email);
   const [allTasks, setAllTasks] = React.useState([]);
   const [dateRequired, setDateRequired] = React.useState(rightNow);

  React.useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => 
  {
    const data = {email} ;
    console.log(data);
    const response = await axios
      .post("http://localhost:8000/getTasksForEmployee", data)
      .then((res) => {
        console.log(res);
        setAllTasks(res.data.data);
      });
  };

  function handleEdit() {
    setEditProfile(false);
    setAddTask(!addTaskShow);
  }

  React.useEffect(() => {}, [dateRequired]);

  if (isLoggedIn === false) {
    return <div>Please Login to Be here</div>;
  } else
    return (
      <main>
        <div className="employee-dashboard">
          <div className="today-task">
            <div className="h3">
              <h3>Today's Tasks</h3>
            </div>
            <div className="edit">
              <button
                className="edit-button button"
                onClick={(e) => {
                  setEditProfile(true);
                }}
              >
                Edit Profile
              </button>
            </div>
            <div className="addtask">
              <button className="add-button button" onClick={handleEdit}>
                + Add Task
              </button>
            </div>
            <div className="alltask">
              {console.log(allTasks)}
              <AllTasks props={allTasks} dateFor={rightNow} />
            </div>
          </div>
          <div className="today-graph">
            <div className="h3">
              <h3>Today's Stats</h3>
            </div>
            <div className="border">
              <div style={{ width: "500px", margin: "auto" }}>
                <TodayEmployee props={allTasks} forDate={rightNow} />
              </div>
            </div>
          </div>
          <div className="weekly-graph">
            <div className="h3">
              <h3>Weekly Stats</h3>
            </div>
            <div className="border">
              <WeeklyEmployeeBar props={allTasks} />
            </div>
          </div>
          <div className="select-graph">
            <div className="h3">
              <h3>Day-wise Stats</h3>
            </div>
            <div style={{ width: "500px" }} className="border">
              <form>
                <input
                  type="date"
                  value={dateRequired}
                  className="button"
                  onChange={(e) => setDateRequired(e.target.value)}
                />
              </form>
              <div style={{ width: "500px", margin: "auto" }}>
                <TodayEmployee forDate={dateRequired} props={allTasks} />
              </div>
            </div>
          </div>
        </div>
        {editProfileShow && <EditProfile props={setEditProfile} />}
        {addTaskShow && (
          <AddTaskButton props={setAddTask} refreshTasks={getAllTasks} />
        )}
      </main>
    );
}

export default EmployeeDashboard;
