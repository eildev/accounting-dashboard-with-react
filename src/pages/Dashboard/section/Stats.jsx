import { Grid2, Stack } from "@mui/material";
import { statsData, statsIconMap } from "../../../data/data";
import DashboardCard from "../../../components/DashboardCard";
import { useGetFooterQuery } from "../../../redux/features/api/dashboardApiSlice";
import SimpleSkeleton from "../../../components/skeleton/SimpleSkeleton";

const Stats = () => {
  const { data, error, isLoading } = useGetFooterQuery();

  if (isLoading)
    return (
      <>
        <Grid2 container sx={{ margin: 2 }} spacing={2}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <SimpleSkeleton />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <SimpleSkeleton />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <SimpleSkeleton />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <SimpleSkeleton />
          </Grid2>
        </Grid2>
      </>
    );
  if (error) return <p>{error?.error ? error?.error : error?.message}</p>;

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
