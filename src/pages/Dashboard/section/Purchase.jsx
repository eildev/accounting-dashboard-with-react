import { useState } from "react";
import MuiCard from "../../../components/MuiCard";
import ChartTitle from "../../../components/ChartTitle";
import { options } from "../../../data/data";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Grid2, Skeleton, Stack, Typography } from "@mui/material";
import { Moving } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { useGetPurchaseReportQuery } from "../../../redux/features/api/dashboardApiSlice";

// const data = [
//   { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
//   { name: "Mar", uv: 3000, pv: 1398, amt: 2210 },
//   { name: "May", uv: 2000, pv: 9800, amt: 2290 },
//   { name: "July", uv: 2780, pv: 3908, amt: 2000 },
//   { name: "Sep", uv: 1890, pv: 4800, amt: 2181 },
//   { name: "Nov", uv: 2390, pv: 3800, amt: 2500 },
// ];

const Purchase = () => {
  const [value, setValue] = useState("");
  const theme = useTheme();
  const { data, error, isLoading } = useGetPurchaseReportQuery();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  if (isLoading)
    return <Skeleton variant="rectangular" width="100%" height="100%" />;
  if (error) return <p>{error?.error ? error?.error : error?.message}</p>;

  return (
    <MuiCard>
      <ChartTitle
        title="Purchase"
        selectProps={{
          label: "Year",
          value: value,
          handleChange: handleChange,
          options: options,
        }}
      />
      <Stack
        direction="row"
        justifyContent="start"
        alignItems="center"
        spacing={1}
        marginBottom="5px"
      >
        <Stack direction="row" sx={{ marginBottom: "10px" }}>
          <Typography variant="h5" sx={{ color: "#0056FD" }}>
            $<Typography variant="span">{data?.total}</Typography>
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? "#1e1e1e" : "#F1F5F7",
            padding: "2px 5px",
            borderRadius: "5px",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontSize: "10px",
              color: "#71CE97",
            }}
          >
            <Moving
              sx={{
                fontSize: "12px",
              }}
            />
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "10px",
            }}
          >
            +12%
          </Typography>
        </Stack>
      </Stack>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <div
            style={{
              width: "100%",
              height: "160px",
              background: "transparent",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data?.data || []}
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
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  dot={false}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Grid2>
      </Grid2>
    </MuiCard>
  );
};

export default Purchase;
