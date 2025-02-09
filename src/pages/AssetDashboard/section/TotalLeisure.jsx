import { useState } from "react";
import ChartTitle from "../../../components/ChartTitle";
import MuiCard from "../../../components/MuiCard";
import { options } from "../../../data/data";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Mar", uv: 3000, pv: 1398, amt: 2210 },
  { name: "May", uv: 2000, pv: 9800, amt: 2290 },
  { name: "July", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Sep", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Nov", uv: 2390, pv: 3800, amt: 2500 },
];
const TotalLeisure = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <MuiCard>
      <ChartTitle
        title="Total Leisure"
        selectProps={{
          label: "Year",
          value: value,
          handleChange: handleChange,
          options: options,
        }}
      />
      <div
        style={{
          width: "100%",
          height: "200px",
          background: "transparent",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data || []}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            {/* Horizontal grid lines only */}
            <CartesianGrid
              horizontal={true}
              vertical={false}
              strokeDasharray="3 3"
              stroke="rgba(0, 0, 0, 0.1)"
            />
            {/* Smaller font size for ticks */}
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#666" }} // Smaller font size
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#666" }} // Smaller font size
            />
            <Tooltip
              contentStyle={{
                background: "rgba(0, 0, 0, 0.8)",
                color: "#fff",
                border: "none",
                fontSize: 10, // Smaller font size in tooltip
              }}
            />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              strokeWidth={2}
              activeDot={{ r: 5 }}
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </MuiCard>
  );
};

export default TotalLeisure;
