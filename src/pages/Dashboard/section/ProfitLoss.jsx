import { Grid2, Skeleton } from "@mui/material";
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

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  if (isLoading)
    return <Skeleton variant="rectangular" width="100%" height="100%" />;
  if (error) return <p>{error?.error ? error?.error : error?.message}</p>;

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
                data={data?.data}
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
                  label={false}
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
        </Grid2>
      </Grid2>
    </MuiCard>
  );
};

export default ProfitLoss;
