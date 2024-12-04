import { useState } from "react";
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

const uData = [
  3000, 2000, 2780, 1890, 2390, 3490, 6778, 3490, 9283, 2347, 3490, 6778,
];
const pData = [
  2400, 1398, 9800, 3908, 4800, 3800, 4300, 3490, 3763, 1247, 4589, 2346,
];
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

const data = xLabels.map((label, index) => ({
  month: label,
  Receivable: pData[index],
  Payable: uData[index],
}));

const TotalCost = () => {
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
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Receivable"
                  fill="#8884d8"
                  radius={[5, 5, 0, 0]}
                />
                <Bar dataKey="Payable" fill="#82ca9d" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Grid2>
      </Grid2>
    </MuiCard>
  );
};

export default TotalCost;
