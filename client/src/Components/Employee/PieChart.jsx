import React from "react";
import Chart from "chart.js/auto";
import { Pie} from "react-chartjs-2";


function PieChart(props) {
  var current = props.props;

  const ar = ["#29BF12", "#0361FF", "#F21B3F"];
  const lab = ["Working", "Meeting", "Break"];
  const work = current[0];
  const meet = current[1];
  const recess = current[2];

  if (work + meet + recess === 0) {
    ar = ["#9F8772", "#9F8772", "#9F8772"];
    lab = ["No Data"];
    work = 0;
    meet = 0;
    recess = 1;
  }

  return (
    <div>
      <Pie
        data={{
          labels: lab,
          datasets: [
            {
              label: "stat graph",
              data: [work, meet, recess],
              backgroundColor: ar,
            },
          ],
        }}
      />
    </div>
  );
}
export default PieChart;
