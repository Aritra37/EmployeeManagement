import React from "react";
import BarChart from "./StackedBarChart";

function WeeklyEmployeeBar(props) {
  const data = props.props;
  const totalWork = [];
  const totalMeet = [];
  const totalBreak = [];
  const pastDates = [];
  for (var j = 6; j >= 0; j--) {
    const work = 0;
    const meet = 0;
    const recess = 0;
    const today = new Date();
    today.setDate(today.getDate() - j);
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    for (var i = 0; i < data.length; i++) {
      var current = data[i];
      var dateloc = current.start.toString();
      dateloc = dateloc.slice(0, 10);
      if (dateloc === today) {
        if (current.type === "Meeting") {
          meet += current.duration;
        } else if (current.type === "Work") {
          work += current.duration;
        } else {
          recess += current.duration;
        }
      }
    }
    totalBreak.push(recess);
    totalMeet.push(meet);
    totalWork.push(work);
    pastDates.push(today);
  }
  const toPass = [pastDates, totalWork, totalMeet, totalBreak];
  return <BarChart props={toPass} />;
}

export default WeeklyEmployeeBaconst