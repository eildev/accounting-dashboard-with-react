import { Grid2 } from "@mui/material";
import MuiCard from "../../../components/MuiCard";
import { useState } from "react";
import { options } from "../../../data/data";
import ChartTitle from "../../../components/ChartTitle";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetProfitLossQuery } from "../../../redux/features/api/dashboardApiSlice";

const data = [
  { name: "Jan", profit: 4000, loss: 2400 },
  { name: "Feb", profit: 4000, loss: 2400 },
  { name: "Mar", profit: 3000, loss: 1398 },
  { name: "Apr", profit: 3000, loss: 1398 },
  { name: "May", profit: 2000, loss: 9800 },
  { name: "Jun", profit: 2000, loss: 9800 },
  { name: "July", profit: 2780, loss: 3908 },
  { name: "Aug", profit: 2780, loss: 3908 },
  { name: "Sep", profit: 1890, loss: 4800 },
  { name: "Oct", profit: 1890, loss: 4800 },
  { name: "Nov", profit: 2390, loss: 3800 },
  { name: "Dec", profit: 2390, loss: 3800 },
];

const ProfitLoss = () => {
  // const { data, isLoading, error } = useGetProfitLossQuery();
  const [value, setValue] = useState("");

  console.log(data?.data);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <MuiCard>
      <ChartTitle
        title="Profit Vs Loss"
        selectProps={{
          label: "Year",
          value: value,
          handleChange: handleChange,
          options: options,
        }}
      />

      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <div style={{ width: "100%", height: "200px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 50, left: 0, bottom: 5 }}
              >
                {/* Horizontal grid lines only */}
                <CartesianGrid
                  horizontal={false}
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="rgba(0, 0, 0, 0.1)"
                />
                {/* X-Axis: Smaller font size for ticks */}
                <XAxis
                  dataKey="name"
                  axisLine={false} // Hides x-axis line
                  tickLine={false} // Hides x-axis tick marks
                  tick={{ fontSize: 10, fill: "#666" }} // Customize tick styling
                />
                {/* Y-Axis: Hidden labels and minimal ticks */}
                <YAxis
                  axisLine={false} // Hides y-axis line
                  tickLine={false} // Hides y-axis tick marks
                  tick={false} // Hides y-axis labels
                  label={false} // No y-axis label
                />
                {/* Tooltip for hover values */}
                <Tooltip
                  contentStyle={{
                    background: "rgba(0, 0, 0, 0.8)", // Dark background
                    color: "#fff",
                    border: "none",
                    fontSize: 10, // Smaller tooltip text
                    borderRadius: 5,
                  }}
                />
                {/* Profit Line */}
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke="#0056FD"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 5 }}
                />
                {/* Loss Line */}
                <Line
                  type="monotone"
                  dataKey="loss"
                  stroke="#6AD2FF"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 5 }}
                />
                {/* Legend at the top */}
                <Legend
                  verticalAlign="top"
                  align="left" // Align the legend to the left
                  wrapperStyle={{
                    fontSize: "18px", // Increase font size
                    fontWeight: "bold", // Optionally make the text bold
                    marginLeft: "10px", // Add spacing to position it away from the chart's edge
                    textTransform: "capitalize",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Grid2>
      </Grid2>
    </MuiCard>
  );
};

export default ProfitLoss;
