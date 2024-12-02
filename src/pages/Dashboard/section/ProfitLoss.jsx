import { Grid2 } from "@mui/material";
import MuiCard from "../../../components/MuiCard";
import { useState } from "react";
import { options } from "../../../data/data";
import { LineChart } from "@mui/x-charts";
import ChartTitle from "../../../components/ChartTitle";

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

const ProfitLoss = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <MuiCard>
      <ChartTitle
        title="Profit Vs Loss"
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
          <div style={{ width: "100%", height: "200px" }}>
            <LineChart
              series={[
                { data: pData, label: "Profit" },
                { data: uData, label: "Loss" },
              ]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
            />
          </div>
        </Grid2>
      </Grid2>
    </MuiCard>
  );
};

export default ProfitLoss;
