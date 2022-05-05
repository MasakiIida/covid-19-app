import React from "react";
import { Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";

const PieChart: React.FC = () => {
  const daily = useSelector(selectDaily);

  const motality =
    (100 * daily[daily.length - 1].Deaths) / daily[daily.length - 1].Confirmed;

  const pieChart = daily[0] && (
    <Doughnut
      data={{
        labels: ["感染者数", "死者数"],
        datasets: [
          {
            data: [
              daily[daily.length - 1].Confirmed,
              daily[daily.length - 1].Deaths,
            ],
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            hoverBackgroundColor: ["#36A2EB", "#FF6384"],
            borderColor: ["transparent", "transparent"],
          },
        ],
      }}
      options={{
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 15,
          },
        },
      }}
    />
  );

  return (
    <>
      <Typography align="center" color="textSecondary" gutterBottom>
        死亡率 {motality.toFixed(2)} [%]
      </Typography>
      {pieChart}
    </>
  );
};

export default PieChart;