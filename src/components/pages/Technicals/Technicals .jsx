import { useState } from "react";
import BollingerBarsChart from "./BollingerBarsChart";

const Technicals = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState("Summary");

  const renderContent = () => {
    switch (activeTab) {
      case "Summary":
        return (
          <div className="p-4 bg-[#1f1f28] text-white/80">
            <h3 className="text-lg font-bold">Summary</h3>

            {/* Responsive Table Wrapper */}
            <div className="overflow-x-auto mt-4">
              <table className="w-full table-auto text-left text-sm md:text-base">
                <thead>
                  <tr>
                    <th className="px-2 md:px-4 py-2">Indicators</th>
                    <th className="px-2 md:px-4 py-2">Sell</th>
                    <th className="px-2 md:px-4 py-2">Buy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 md:px-4 py-2">Bollinger Bars</td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="w-12 md:w-20 bg-gray-600 h-2 rounded"></div>
                    </td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="w-24 md:w-32 bg-green-600 h-2 rounded"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2">Stochastic Oscillator</td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="w-16 md:w-24 bg-gray-600 h-2 rounded"></div>
                    </td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="w-12 md:w-16 bg-green-600 h-2 rounded"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2">
                      Relative Strength Index
                    </td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="w-12 md:w-16 bg-gray-600 h-2 rounded"></div>
                    </td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="w-32 md:w-40 bg-green-600 h-2 rounded"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2">
                      Moving Average Convergence
                    </td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="w-8 md:w-12 bg-gray-600 h-2 rounded"></div>
                    </td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="w-20 md:w-28 bg-green-600 h-2 rounded"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2">Average True Range</td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="w-16 md:w-20 bg-red-600 h-2 rounded"></div>
                    </td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="w-12 md:w-16 bg-gray-600 h-2 rounded"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2">Market Regime</td>
                    <td className="px-2 md:px-4 py-2" colSpan="2">
                      <div className="text-gray-400">Mean Reverting</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 md:px-4 py-2">
                      KD Technical Indication
                    </td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="w-24 md:w-32 bg-red-600 h-2 rounded"></div>
                    </td>
                    <td className="px-2 md:px-4 py-2">
                      <div className="w-12 md:w-16 bg-gray-600 h-2 rounded"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case "Bollinger Bars":
        return <BollingerBarsChart />;
      case "Stochastic Oscillator":
        return (
          <div className="p-4 bg-[#1a1a21] text-white flex flex-col justify-evenly min-h-[600px]">
            <h1 className="text-3xl font-bold">Price Book Value Ratio</h1>
            <h1 className="text-3xl font-bold">Total Assets</h1>
            <h1 className="text-3xl font-bold">Current Ratio</h1>
          </div>
        );
      case "RSI":
        return <div className="p-4 text-white">4</div>;
      case "MACD":
        return <div className="p-4 text-white">5</div>;
      case "Average True Range":
        return <div className="p-4 text-white">6</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-[#1a1a21] min-h-screen text-white/80">
      <h2 className="text-3xl font-bold mb-4">Apple Inc. Common Stock USD</h2>
      <h3 className="text-lg font-semibold mb-4">Technical Analysis</h3>

      <div className="flex flex-wrap gap-4 mb-6">
        {[
          "Summary",
          "Bollinger Bars",
          "Stochastic Oscillator",
          "RSI",
          "MACD",
          "Average True Range",
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded text-sm md:text-base ${
              activeTab === tab
                ? "bg-red-500 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="py-4 rounded-lg">{renderContent()}</div>
    </div>
  );
};

export default Technicals;
