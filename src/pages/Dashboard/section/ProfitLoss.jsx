import { Box, Grid2, Stack, Typography } from "@mui/material";
import MuiCard from "../../../components/MuiCard";
import MuiSelect from "../../../components/MuiSelect";
import { Paragraph } from "../../../components/Typography/MuiTypography";
import { useState } from "react";
import { BarChart } from "@mui/icons-material";
import { options } from "../../../data/data";
import TickPlacementBars from "../../../components/Chart/MuiChart";

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
              <Paragraph>Jan 2021 -Jun 2021</Paragraph>
            </Grid2>
            <Grid2 size={8}>
              <TickPlacementBars></TickPlacementBars>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={12}>
          <Grid2 container spacing={4}>
            <Grid2 size={4}></Grid2>
            <Grid2 size={8}></Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </MuiCard>
  );
};

export default ProfitLoss;
