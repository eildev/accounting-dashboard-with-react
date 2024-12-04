import { Grid2 } from "@mui/material";
import { statsData, statsIconMap } from "../../../data/data";
import DashboardCard from "../../../components/DashboardCard";
import { useGetFooterQuery } from "../../../redux/features/api/dashboardApiSlice";

const Stats = () => {
  const { data, error, isLoading } = useGetFooterQuery();

  return (
    <Grid2 container sx={{ margin: 2 }} spacing={2}>
      {data?.data.slice(0, 4).map((item) => (
        <DashboardCard
          key={item.id}
          element={item}
          size={{ xs: 12, md: 6 }}
          images={statsIconMap}
        />
      ))}
    </Grid2>
  );
};

export default Stats;
