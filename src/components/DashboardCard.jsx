import { Grid2, Typography } from "@mui/material";
import MuiCard from "./MuiCard";
import { ThemeProvider } from "@emotion/react";
import { colorThemeProvider } from "../provider/colorThemeProvider";

const DashboardCard = ({ element }) => {
  return (
    <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
      <MuiCard>
        <Grid2 container spacing={2}>
          <Grid2 size={8}>
            <ThemeProvider theme={colorThemeProvider}>
              <Typography variant="body1">{element.name}</Typography>
              <Typography variant="h4">{element.value}</Typography>
            </ThemeProvider>
          </Grid2>
          <Grid2 size={4}>
            <ThemeProvider theme={colorThemeProvider}>
              <Typography variant="span">{element.icon}</Typography>
            </ThemeProvider>
          </Grid2>
        </Grid2>
      </MuiCard>
    </Grid2>
  );
};

export default DashboardCard;
