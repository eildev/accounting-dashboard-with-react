import { useState } from "react";
import MuiCard from "../../../components/MuiCard";
import ChartTitle from "../../../components/ChartTitle";
import { Grid2, Skeleton } from "@mui/material";
import { options } from "../../../data/data";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetRevenueReportQuery } from "../../../redux/features/api/dashboardApiSlice";
// const data = [
//   {
//     name: "Jan",
//     uv: 4000,
//     pv: 2400,
//   },
//   {
//     name: "Feb",
//     uv: 3000,
//     pv: 1398,
//   },
//   {
//     name: "Mar",
//     uv: 2000,
//     pv: 9800,
//   },
//   {
//     name: "Apr",
//     uv: 2780,
//     pv: 3908,
//   },
//   {
//     name: "May",
//     uv: 1890,
//     pv: 4800,
//   },
//   {
//     name: "Jun",
//     uv: 2390,
//     pv: 3800,
//   },
// ];
const Revenue = () => {
  const [value, setValue] = useState("");
  const { data, error, isLoading } = useGetRevenueReportQuery();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  if (isLoading)
    return <Skeleton variant="rectangular" width="100%" height="100%" />;
  if (error) return <p>{error?.error ? error?.error : error?.message}</p>;

  return (
    <MuiCard>
      <ChartTitle
        title="Revenue"
        selectProps={{
          label: "Yearly",
          value: value,
          handleChange: handleChange,
          options: options,
        }}
      />

      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <div
            style={{
              width: "100%",
              height: "200px",
              background: "transparent",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data?.data || []}
                margin={{
                  top: 20,
                  right: 20,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid
                  horizontal={true}
                  vertical={false}
                  stroke="rgba(0, 0, 0, 0.1)"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#666" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#666" }}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#4C4EB5" barSize={20} />
                <Bar
                  dataKey="uv"
                  stackId="a"
                  fill="#FF5807"
                  radius={[5, 5, 0, 0]}
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Grid2>
      </Grid2>
    </MuiCard>
  );
};

export default Revenue;
