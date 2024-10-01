import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import "chart.js/auto";
import { useState } from "react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const DashboardChart = () => {
  const [timeRange, setTimeRange] = useState("1Y"); // Default time range

  const stockData = {
    "1M": {
      labels: [
        "Sep 1",
        "Oct 4",
        "Sep 8",
        "Sep 15",
        "Sep 22",
        "Sep 29",
        "Oct 31",
      ],
      data: [100, 215, 210, 230, 225, 300, 200],
      percentageChange: "+1.00%",
    },
    "1Y": {
      labels: [
        "Oct 2023",
        "Nov 2023",
        "Dec 2023",
        "Jan 2024",
        "Feb 2024",
        "Mar 2024",
        "Apr 2024",
        "May 2024",
        "Jun 2024",
        "Jul 2024",
        "Aug 2024",
        "Sep 2024",
      ],
      data: [150, 220, 215, 200, 225, 190, 205, 215, 230, 240, 235, 225],
      percentageChange: "+6.50%",
    },
    "5Y": {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      data: [200, 500, 400, 800, 350],
      percentageChange: "+323.00%",
    },
    MAX: {
      labels: [
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
      ],
      data: [100, 75, 100, 150, 200, 180, 225, 250, 275, 300, 250],
      percentageChange: "+600.00%",
    },
  };

  // Chart configuration
  const chartData = {
    labels: stockData[timeRange].labels,
    datasets: [
      {
        label: "Apple Inc.",
        data: stockData[timeRange].data,
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.4, // For smoother line
        pointRadius: 4, // To highlight data points
        pointBackgroundColor: "red",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          color: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the label at the top
      },
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-white/80 pt-6 pb-8">Dashboard</h1>

      <div className="bg-[#1f1f28] mt-8 p-4 rounded-lg">
        <h2 className="text-4xl font-bold mb-4 text-white/80">
          Apple Inc. Common <br /> Stock
        </h2>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-3xl font-bold text-white">$225.13</span>
            <span className="text-green-500 ml-2">
              {stockData[timeRange].percentageChange}
            </span>
          </div>
          <div className="flex space-x-2">
            {["1M", "1Y", "5Y", "MAX"].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 rounded ${
                  timeRange === range
                    ? "bg-green-500 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        <div className="h-80">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
