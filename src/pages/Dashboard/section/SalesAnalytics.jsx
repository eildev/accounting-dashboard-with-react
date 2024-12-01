

import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import {  Box, FormControl, Grid2, InputLabel, Select, Stack, Typography,  } from '@mui/material';
import { Paragraph } from '../../../components/Typography/MuiTypography';
import MuiSelect from '../../../components/MuiSelect';
import MuiCard from '../../../components/MuiCard';
import { useState } from 'react';
import { options } from '../../../data/data';

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
      <Typography variant="h5">Sales Analytics</Typography>
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
    <Grid2 container >
        <Grid2 container>
    
        </Grid2>
        <Grid2 size ={{sm:6 ,md:12}}>
        <PieChart series={[{ data, innerRadius: 70 }]} {...size}>
        <PieCenterLabel>In-store Sales</PieCenterLabel>
        </PieChart>
        </Grid2>
        
    </Grid2>
    </MuiCard>
  );
}

