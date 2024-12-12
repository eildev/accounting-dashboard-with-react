import { Grid2, Typography } from "@mui/material";
import MuiCard from "./MuiCard";
import { ThemeProvider } from "@emotion/react";
import { colorThemeProvider } from "../provider/colorThemeProvider";
import { TrendingDownRounded, TrendingUpRounded } from "@mui/icons-material";

const DashboardCard = ({ element, size, images }) => {
  const icon = images[element?.title] || <DefaultIcon />;
  return (
    <Grid2 size={size}>
      <MuiCard>
        <Grid2 container spacing={2}>
          <Grid2 size={8}>
            <ThemeProvider theme={colorThemeProvider}>
              <Typography variant="body1">{element?.title ?? ""}</Typography>
              <Typography variant="h5">{element?.value ?? ""}</Typography>
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
          <Grid2
            size={4}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <img
              sx={{
                height: "50px",
                width: "50px",
              }}
              src={icon}
              alt=""
            />
          </Grid2>
        </Grid2>
      </MuiCard>
    </Grid2>
  );
};

export default DashboardCard;
