import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const KDFairValue = () => {
  const data = {
    labels: [
      "0",
      "28.23",
      "56.46",
      "84.69",
      "112.92",
      "141.15",
      "169.38",
      "197.61",
      "225.84",
      "254.07",
    ],
    datasets: [
      {
        label: "Fair Value",
        data: [
          28.23, 56.46, 84.69, 112.92, 141.15, 169.38, 197.61, 225.84, 254.07,
          282.3,
        ],
        backgroundColor: (context) => {
          const value = context.raw;
          if (value <= 28.23) return "rgba(34, 197, 94, 1)";
          if (value <= 56.46) return "rgba(234, 179, 8, 1)";
          return "rgba(239, 68, 68, 1)";
        },
        borderColor: "rgba(0, 0, 0, 0)",
        borderWidth: 0,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "x",
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="bg-[#1f1f28] mb-6 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-white mb-4">KD Fair Value</h3>
      <div className="flex justify-between  text-white text-sm mb-2">
        <span className="text-green-500">Undervalued</span>
        <span className="text-yellow-500">Fair Value</span>
        <span className="text-red-500">Overvalued</span>
      </div>
      <div style={{ height: "100px" }}>
        <Bar data={data} options={options} />
      </div>
      <div className="relative text-center text-white mt-2">
        <span className="absolute left-[80%] top-[-20px] transform -translate-x-1/2 text-sm font-bold">
          M.P $225.84
        </span>
        <div className="absolute left-[80%] top-[10px] transform -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2l6 8H6l6-8z"
            />
          </svg>
        </div>
        <div className="absolute left-[80%] bottom-[-5px] transform -translate-x-1/2 h-4 w-4 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default KDFairValue;
