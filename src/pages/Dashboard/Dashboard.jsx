import { Grid2 } from "@mui/material";
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
    
      <Grid2 container spacing={2}>
        {data.map((item) => (
          <DashboardCard key={item.id} element={item} />
        ))}
      </Grid2>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <ProfitLoss />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <SalesAnalytics />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Dashboard;
