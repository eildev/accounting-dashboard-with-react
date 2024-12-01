import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { dataset, valueFormatter } from "../../data/weather";
import { useState } from "react";

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  series: [
    {
      dataKey: "seoul",
      label: "Seoul rainfall",
      valueFormatter,
    },
  ],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};

export default function MuiChart() {
  const [tickPlacement, setTickPlacement] = useState("middle");
  const [tickLabelPlacement, setTickLabelPlacement] = useState("middle");

  return (
    <div style={{ width: "100%" }}>
      <BarChart
        dataset={dataset}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "month",
            tickPlacement,
            tickLabelPlacement,
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
