import { Grid } from "@mui/material";
import { dashBoardCardData } from "../data/data";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={2}>
        {dashBoardCardData.map((item) => (
          <DashboardCard element={item} />
        ))}
      </Grid>
    </>
  );
};

export default Dashboard;
