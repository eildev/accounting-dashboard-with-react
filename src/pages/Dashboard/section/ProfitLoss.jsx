import { Box, Grid2, Stack, Typography } from "@mui/material";
import MuiCard from "../../../components/MuiCard";
import MuiSelect from "../../../components/MuiSelect";
import { Paragraph } from "../../../components/Typography/MuiTypography";
import { useState } from "react";
import { options } from "../../../data/data";
import { LineChart } from "@mui/x-charts";

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
      <Stack
        direction="row"
        spacing={0}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h5">Profit vs Loss</Typography>
          <Paragraph>Jan 2021 -Jun 2021</Paragraph>
        </Box>
        <Box>
          <MuiSelect
            label="Year"
            value={value}
            handleChange={handleChange}
            options={options}
          />
        </Box>
      </Stack>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Grid2 container spacing={4}>
            <Grid2 size={4}>
              <Typography variant="h4">1.74%</Typography>
              <Paragraph>Net Profit %</Paragraph>
            </Grid2>
            <Grid2 size={8}>
              <LineChart
                width={500}
                height={300}
                series={[
                  { data: pData, label: "Profit" },
                  { data: uData, label: "Loss" },
                ]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
              />
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={12}>
          <Grid2 container spacing={4}>
            <Grid2 size={4}>
              <Typography variant="h4">1.74%</Typography>
              <Paragraph>Net Loss %</Paragraph>
            </Grid2>
            <Grid2 size={8}></Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </MuiCard>
  );
};

export default ProfitLoss;
