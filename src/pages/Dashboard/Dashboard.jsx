import { Grid2 } from "@mui/material";
import ProfitLoss from "./section/ProfitLoss";
import SalesAnalytics from "./section/SalesAnalytics";
import DashboardCard from "../../components/DashboardCard";
import { useGetDataQuery } from "../../redux/features/api/dashboardApiSlice";
import TotalCost from "./section/TotalCost";
import Purchase from "./section/Purchase";
import Stats from "./section/Stats";
import Revenue from "./section/Revenue";

const Dashboard = () => {
  const { data, error, isLoading } = useGetDataQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Grid2 container sx={{ margin: 2 }} spacing={2}>
        {data?.data.slice(0, 4).map((item) => (
          <DashboardCard
            key={item.id}
            element={item}
            size={{ xs: 12, md: 6, lg: 3 }}
          />
        ))}
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
