import { BarChart, Bar, XAxis, YAxis, ReferenceLine, Label } from "recharts";

const data = [{ name: "Price Earning Ratio", value: 34.37, full: 42.96 }];

const PriceEarningRatioChart = () => {
  return (
    <div className="bg-[#1f1f28] p-4 rounded-lg">
      <h2 className="text-white text-xl font-bold mb-4">Price Earning Ratio</h2>
      <BarChart
        width={800}
        height={150}
        data={data}
        layout="vertical"
        barSize={100}
      >
        <XAxis type="number" domain={[0, 42.96]} hide />
        <YAxis type="category" dataKey="name" hide />
        <Bar dataKey="value" fill="#EF4444">
          <Label
            position="right"
            content={({ value }) => (
              <text
                x={560}
                y={50}
                fill="white"
                textAnchor="end"
                dominantBaseline="middle"
              >
                AAPL ({value})
              </text>
            )}
          />
        </Bar>
        <Bar dataKey="full" fill="#1F2937" />
        <ReferenceLine x={15} stroke="white" strokeDasharray="3 3">
          <Label value="Threshold" position="top" fill="white" />
        </ReferenceLine>
      </BarChart>
      <div className="flex justify-between text-white mt-2">
        <span>0</span>
        <span>6.14</span>
        <span>12.28</span>
        <span>18.41</span>
        <span>24.55</span>
        <span>30.69</span>
        <span>36.83</span>
        <span>42.96</span>
      </div>
    </div>
  );
};

export default PriceEarningRatioChart;
