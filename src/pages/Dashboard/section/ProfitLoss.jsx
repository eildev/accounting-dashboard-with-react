import { Grid } from "@mui/material";
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

const ProfitLoss = () => {
  const { data, isLoading, error } = useGetProfitLossQuery();
  const [value, setValue] = useState("");
console.log(data)
  // Transform the API data
  const transformedData = data?.data?.map(item => ({
    name: item.name,
    profit: Number(item.profit.replace(/,/g, "")), // Convert profit to number
    loss: Number(item.loss.replace(/,/g, "")), // Convert loss to number
  })) || [];

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!transformedData.length) return <div>No data available</div>;

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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div style={{ width: "100%", height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={transformedData}
                margin={{ top: 5, right: 50, left: 0, bottom: 5 }}
              >
                {/* Grid lines */}
                <CartesianGrid
                  horizontal={false}
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="rgba(0, 0, 0, 0.1)"
                />
                {/* X-Axis */}
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#666" }}
                />
                {/* Y-Axis */}
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={false}
                  label ={false}
                />
                {/* Tooltip */}
                <Tooltip
                  contentStyle={{
                    background: "rgba(0, 0, 0, 0.8)",
                    color: "#fff",
                    border: "none",
                    fontSize: 10,
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
                {/* Legend */}
                <Legend
                  verticalAlign="top"
                  align="left"
                  wrapperStyle={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginLeft: "10px",
                    textTransform: "capitalize",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Grid>
      </Grid>
    </MuiCard>
  );
};

export default ProfitLoss;
