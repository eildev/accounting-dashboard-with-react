import { Grid } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import ProfitLoss from "./section/ProfitLoss";
import SalesAnalytics from "./section/SalesAnalytics";
import DashboardCard from "../../components/DashboardCard";
import { useGetDataQuery } from "../../redux/features/api/dashboardApiSlice";
import TotalCost from "./section/TotalCost";

const Dashboard = () => {
  const { data, error, isLoading } = useGetDataQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Grid container spacing={2}>
        {data.map((item) => (
          <DashboardCard key={item.id} element={item} />
        ))}
      </Grid>
      <Grid container spacing={2}>
        <Grid item sx={7}>
          <ProfitLoss />
        </Grid>
        <Grid item sx={5}>
          <SalesAnalytics />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sx={12}>
        <TotalCost/>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;