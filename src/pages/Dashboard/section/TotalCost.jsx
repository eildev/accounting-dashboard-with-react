import { useState, useEffect } from "react";
import ChartTitle from "../../../components/ChartTitle";
import MuiCard from "../../../components/MuiCard";
import { options } from "../../../data/data";
import { Grid2 } from "@mui/material";
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
import { useGetCostInOutQuery } from "../../../redux/features/api/dashboardApiSlice";

const TotalCost = () => {
  const { data } = useGetCostInOutQuery();
  const [chartData, setChartData] = useState([]);

  // Map the API data dynamically if it's available
  useEffect(() => {
    if (data?.payableData && data?.receivableData) {
      const xLabels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const dynamicData = xLabels.map((label, index) => ({
        month: label,
        Receivable: data.receivableData[index],
        Payable: data.payableData[index],
      }));

      setChartData(dynamicData);
    }
  }, [data]);

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <MuiCard>
      <ChartTitle
        title="Total cost in and out"
        subtitle="Jan 2021 - Jun 2021"
        selectProps={{
          label: "Year",
          value: value,
          handleChange: handleChange,
          options: options,
        }}
      />
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <div style={{ width: "100%", height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 5, right: 50, left: 0, bottom: 5 }}
              >
                <CartesianGrid
                  horizontal={false}
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="rgba(0, 0, 0, 0.1)"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#666" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={false}
                  label={false}
                />
                <Tooltip />
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
                <Bar
                  dataKey="Receivable"
                  fill="#0056FD"
                  radius={[5, 5, 0, 0]}
                />
                <Bar dataKey="Payable" fill="#5EC4F0" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Grid2>
      </Grid2>
    </MuiCard>
  );
};

export default TotalCost;
