
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { Box, FormControl, Grid2, InputLabel, Select, Typography } from '@mui/material';

const data = [
  { value: 5, label: 'Graphics' },
  { value: 10, label: 'Website' },
  { value: 15, label: 'E-commerce' },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function SalesAnalytics() {
  return (
    <Grid2 container >
        <Grid2 container>
        <h2>Sales Analytics</h2>
        <FormControl fullWidth>
        <InputLabel id="year-select-label">Year</InputLabel>
        <Select
          labelId="year-select-label"
          value={2024}
          label="Year"
        >
        </Select>
    </FormControl>
        </Grid2>
        <Grid2 size ={{sm:6 ,md:12}}>
        <PieChart series={[{ data, innerRadius: 70 }]} {...size}>
        <PieCenterLabel>In-store Sales</PieCenterLabel>
        </PieChart>
        </Grid2>
        
    </Grid2>
    
  );
}

