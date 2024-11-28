import { Grid } from "@mui/material";
import DashboardCard from "../components/DashboardCard";
import { useGetDataQuery } from "../redux/features/api/dashboardApiSlice";
import { BarChart } from "@mui/x-charts/BarChart";

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
        <Grid sx={7}></Grid>
        <Grid sx={5}></Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
