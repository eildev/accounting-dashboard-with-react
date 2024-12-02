import { Grid2, Typography } from "@mui/material";
import MuiCard from "./MuiCard";
import { ThemeProvider } from "@emotion/react";
import { colorThemeProvider } from "../provider/colorThemeProvider";
import { TrendingDownRounded, TrendingUpRounded } from "@mui/icons-material";
import { iconMap } from "../data/data";

const DashboardCard = ({ element, size }) => {
  const icon = iconMap[element?.title ?? null];
  return (
    <Grid2 size={size}>
      <MuiCard>
        <Grid2 container spacing={2}>
          <Grid2 size={8}>
            <ThemeProvider theme={colorThemeProvider}>
              <Typography variant="body1">{element?.title ?? ""}</Typography>
              <Typography variant="h4">{element?.value ?? ""}</Typography>
            </ThemeProvider>
            {element?.revenue ? (
              <Grid2 size={12}>
                {element?.revenue > 0 ? (
                  <Typography sx={{ color: "#1CAF00" }}>
                    {element?.revenue} % <TrendingUpRounded />
                  </Typography>
                ) : (
                  <Typography sx={{ color: "#FE0968" }}>
                    {element?.revenue} % <TrendingDownRounded />
                  </Typography>
                )}
              </Grid2>
            ) : null}
          </Grid2>
          <Grid2 size={4}>
            <ThemeProvider theme={colorThemeProvider}>
              <Typography variant="span">{icon}</Typography>
            </ThemeProvider>
          </Grid2>
        </Grid2>
      </MuiCard>
    </Grid2>
  );
};

export default DashboardCard;
