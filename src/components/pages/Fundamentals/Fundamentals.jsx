import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import KDFairValue from "./KDFairValue";
import PriceEarningRatioChart from "./PriceEarningRatioChart";
import HistoricalEarningsDividendsCharts from "./HistoricalEarningsDividendsCharts";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Fundamentals = () => {
  const [activeTab, setActiveTab] = useState("Summary");

  const renderContent = () => {
    switch (activeTab) {
      case "Summary":
        return (
          <div>
            <h1 className="text-2xl font-bold my-6 text-white/80">
              KD Fundamental Analysis suggests AAPL is{" "}
              <span className="text-red-500">Overvalued</span>
            </h1>
            <KDFairValue />

            <div className="bg-[#1f1f28] p-4 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Summary</h3>
              <table className="w-full text-white">
                <thead>
                  <tr>
                    <th className="text-left">Metric</th>
                    <th className="text-left">Value</th>
                    <th className="text-left">Target / (Threshold)</th>
                    <th className="text-left">
                      <button className="  py-1 ml-2 rounded">Result</button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Enterprise Size Billions</td>
                    <td>352</td>
                    <td>2</td>
                    <td>
                      <button className="bg-gray-700 text-green-500 w-14 px-2 py-1 ml-2 rounded">
                        PASS
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Financial Position</td>
                    <td>2.85</td>
                    <td>2.0</td>
                    <td>
                      <button className="bg-gray-700 text-green-500 w-14 px-2 py-1 ml-2 rounded">
                        PASS
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Earnings Stability</td>
                    <td>4</td>
                    <td>4</td>
                    <td>
                      <button className="bg-gray-700 text-green-500 w-14 px-2 py-1 ml-2 rounded">
                        PASS
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Dividend Record</td>
                    <td>11</td>
                    <td>4</td>
                    <td>
                      <button className="bg-gray-700 text-green-500 w-14 px-2 py-1 ml-2 rounded">
                        PASS
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Price-Earnings Ratio</td>
                    <td>34.37</td>
                    <td>(15.00)</td>
                    <td className="text-red-500">
                      <button className="bg-gray-700 text-red-500 px-2 w-14 py-1 ml-2 rounded">
                        FAIL
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Price-Book Value Ratio</td>
                    <td>51.54</td>
                    <td>(1.5)</td>
                    <td className="">
                      <button className="bg-gray-700 text-red-500 px-2 w-14 py-1 ml-2 rounded">
                        FAIL
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case "Earnings":
        return (
          <div className="space-y-8">
            <PriceEarningRatioChart />
            <HistoricalEarningsDividendsCharts />
          </div>
        );
      case "Equity":
        return (
          <div className="space-y-8">
            <PriceEarningRatioChart />
            <HistoricalEarningsDividendsCharts />
          </div>
        );
      default:
        return <div className="p-4">No Content Available</div>;
    }
  };

  return (
    <div className="p-6 bg-[#1a1a21] min-h-screen">
      <h2 className="text-2xl font-bold text-white mb-4">
        Apple Inc. Common Stock USD
      </h2>
      <h3 className="text-lg font-semibold text-white mb-6">
        Fundamental Analysis
      </h3>

      {/* Tab buttons */}
      <div className="flex space-x-4 mb-6">
        {["Summary", "Earnings", "Equity"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab
                ? "bg-red-500 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div>{renderContent()}</div>
    </div>
  );
};

export default Fundamentals;
