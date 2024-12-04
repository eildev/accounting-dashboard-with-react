<<<<<<< HEAD


import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import {  Box, Grid2,  Stack, Typography,  } from '@mui/material';
import { Paragraph } from '../../../components/Typography/MuiTypography';
import MuiSelect from '../../../components/MuiSelect';
import MuiCard from '../../../components/MuiCard';
import { useState } from 'react';
import { options } from '../../../data/data';
=======
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { Grid2 } from "@mui/material";
import MuiCard from "../../../components/MuiCard";
import { useState } from "react";
import { options } from "../../../data/data";
import ChartTitle from "../../../components/ChartTitle";
>>>>>>> 367e7997b59933c6856fef6ef380a8a3a2634993

const data = [
  { value: 5, label: "Graphics" },
  { value: 10, label: "Website" },
  { value: 15, label: "E-commerce" },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 16,
}));

function CustomLabel({ x, y, label }) {
  return (
    <StyledText x={x} y={y + 20}>
      {" "}
      {/* Move label down by adjusting the y value */}
      {label}
    </StyledText>
  );
}

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function SalesAnalytics() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <MuiCard>
      <ChartTitle
        title="Sales Analytics"
        subtitle="Jan 2021 - Jun 2021"
        selectProps={{
          label: "Year",
          value: value,
          handleChange: handleChange,
          options: options,
        }}
      />
      <Grid2 container>
        <Grid2 size={{ sm: 6, md: 12 }}>
          <PieChart
            series={[
              {
                data,
                innerRadius: 70,
                label: ({ x, y, label }) => (
                  <CustomLabel x={x} y={y} label={label} />
                ),
              },
            ]}
            {...size}
          >
            <PieCenterLabel>In-store Sales</PieCenterLabel>
          </PieChart>
        </Grid2>
      </Grid2>
    </MuiCard>
  );
}
