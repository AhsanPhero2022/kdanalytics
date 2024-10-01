import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BollingerBarsChart = () => {
  const data = {
    labels: ["Feb 11", "Feb 18", "Feb 25", "Mar 18", "Apr 25"],
    datasets: [
      {
        label: "Upper Band",
        data: [500, 1500, 2500, 1500, 2000],
        borderColor: "rgba(0, 255, 0, 0.8)",
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        fill: "+1", // Fill the area between this dataset and the next dataset
        pointRadius: 4,
        pointBackgroundColor: "rgba(0, 255, 0, 1)",
      },
      {
        label: "Lower Band",
        data: [500, 1000, 1500, 1000, 1500],
        borderColor: "rgba(255, 255, 255, 0.8)",
        backgroundColor: "rgba(255, 255, 255, 0)",
        pointRadius: 4,
        pointBackgroundColor: "rgba(255, 255, 255, 1)",
      },
      {
        label: "Middle Line",
        data: [750, 1200, 2000, 1200, 1800],
        borderColor: "rgba(255, 0, 0, 0.8)",
        backgroundColor: "rgba(255, 0, 0, 0)",
        pointRadius: 4,
        pointBackgroundColor: "rgba(255, 0, 0, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "rgba(255, 255, 255, 0.8)",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "rgba(255, 255, 255, 0.8)",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "rgba(255, 255, 255, 0.8)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
  };

  return (
    <div className="bg-[#1f1f28] p-6 rounded-lg">
      <h3 className="text-lg font-bold text-white mb-4">Bollinger Bars</h3>
      <div style={{ height: "300px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BollingerBarsChart;
