import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { expenseData } from "../commons/utils";

Chart.register(CategoryScale);

function ExpenseBarChart() {
  const [chartData] = useState({
    labels: expenseData.map(({ category }) => category),
    datasets: [
      {
        label: "Total",
        fill: false,
        lineTension: 0.5,
        backgroundColor: [
          "rgba(238, 130, 238)",
          "rgba(144, 238, 144)",
          "rgba(255, 228, 181)",
          "rgba(255, 182, 193)",
        ],
        borderColor: "transparent",
        borderWidth: 2,
        data: expenseData.map(({ total }) => total),
      },
    ],
  });
  return (
    <>
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          scales: {
            y: {
              beginAtZero: false,
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </>
  );
}

export default ExpenseBarChart;
