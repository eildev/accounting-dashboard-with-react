import { Grid, Typography } from "@mui/material";
import MuiCard from "./MuiCard";
import { ThemeProvider } from "@emotion/react";
import { colorThemeProvider } from "../provider/colorThemeProvider";
import { DirectionsBikeTwoTone } from "@mui/icons-material";

const DashboardCard = ({ element }) => {
  return (
    <Grid item xs={3}>
      <MuiCard>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <ThemeProvider theme={colorThemeProvider}>
              <Typography variant="body1">{element.name}</Typography>
              <Typography variant="h4">{element.value}</Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs={4}>
            <ThemeProvider theme={colorThemeProvider}>
              <Typography variant="span">{element.icon}</Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
      </MuiCard>
    </Grid>
  );
};

export default DashboardCard;
