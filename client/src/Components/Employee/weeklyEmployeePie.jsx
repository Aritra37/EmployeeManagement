import React from "react";
import PieChart from "./PieChart";

function WeeklyEmployeePie(props) {
  const data = props.props;
  const work = 0;
  const meet = 0;
  const recess = 0;
  for (var i = 6; i >= 0; i++) {
    const today = new Date();
    today.setDate(today.getDate() - i);
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    for (var i = 0; i < data.length; i++) {
      const current = data[i];
      const dateloc = current.start.toString();
      dateloc = dateloc.slice(0, 10);
      if (dateloc == today) {
        if (current.type == "Meeting") {
          meet += current.duration;
        } else if (current.type == "Work") {
          work += current.duration;
        } else {
          recess += current.duration;
        }
      }
    }
  }
  if (work === 0 && meet === 0 && recess === 0) {
    return <div>" "</div>;
  }
  var toPass = [work, meet, recess];
  return <PieChart props={toPass} />;
}

export default WeeklyEmployeePiconst