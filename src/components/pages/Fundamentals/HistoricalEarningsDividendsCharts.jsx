/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const earningsData = [
  { year: 2020, actual: 100.41, target: 50.26 },
  { year: 2021, actual: 110.68, target: 59.65 },
  { year: 2022, actual: 120.8, target: 62.16 },
  { year: 2023, actual: 97.01, target: 62.29 },
];

const dividendsData = [
  { year: 2020, dividend: 0.5 },
  { year: 2021, dividend: 0.4 },
  { year: 2022, dividend: 0.5 },
  { year: 2023, dividend: 0.3 },
];

const formatYAxis = (value) => {
  if (value >= 1e9) return `${value / 1e9}B`;
  if (value >= 1e6) return `${value / 1e6}M`;
  return value;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-2 rounded shadow-lg">
        <p className="text-white">{`Year: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-white">
            {`${entry.name}: ${entry.value.toFixed(2)}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const HistoricalEarningsDividendsCharts = () => {
  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col  space-x-4 bg-gray-900 p-4 text-white">
      <div className="w-1/2 ">
        <h2 className="text-xl font-bold mb-2">Historical Earning</h2>
        <div className="text-sm mb-2">
          <span className="text-red-500 font-bold">99.80B</span>
          <span className="text-gray-400 ml-2">Target Earnings</span>
        </div>
        <div className="text-sm mb-4">
          <span className="text-red-500 font-bold">62.29B</span>
          <span className="text-gray-400 ml-2">Actual Earnings</span>
        </div>
        <ResponsiveContainer width="100%" height={270}>
          <BarChart
            data={earningsData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="year" tick={{ fill: "white" }} />
            <YAxis tickFormatter={formatYAxis} tick={{ fill: "white" }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="actual" fill="#EF4444" radius={[4, 4, 0, 0]} />
            <Bar dataKey="target" fill="#ffffff" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="w-1/2 ">
        <h2 className="text-xl font-bold mb-2">Historical Dividends</h2>
        <div className="text-sm mb-4 ">
          <span className="text-red-500 font-bold">0.4</span>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={dividendsData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="year" tick={{ fill: "white" }} />
            <YAxis tick={{ fill: "white" }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="dividend" fill="#EF4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HistoricalEarningsDividendsCharts;
