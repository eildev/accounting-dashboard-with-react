import { Grid2 } from "@mui/material";
import ProfitLoss from "./section/ProfitLoss";
import SalesAnalytics from "./section/SalesAnalytics";
import TotalCost from "./section/TotalCost";
import Purchase from "./section/Purchase";
import Stats from "./section/Stats";
import Revenue from "./section/Revenue";
import TopCard from "./section/TopCard";

const Dashboard = () => {
  return (
    <>
      <Grid2 container sx={{ margin: 2 }} spacing={2}>
        <TopCard />
      </Grid2>
      <Grid2 container sx={{ margin: 2 }} spacing={2}>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <ProfitLoss />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <SalesAnalytics />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <TotalCost />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Purchase />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Stats />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <Revenue />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Dashboard;
