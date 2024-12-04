import { Stack } from "@mui/material";
import DashboardCard from "../../../components/DashboardCard";
import ErrorPage from "../../../components/ErrorPage";
import { iconMap } from "../../../data/data";
import { useGetDataQuery } from "../../../redux/features/api/dashboardApiSlice";
import SimpleSkeleton from "../../../components/skeleton/SimpleSkeleton";

const TopCard = () => {
  const { data, error, isLoading } = useGetDataQuery();

  if (isLoading)
    return (
      <>
        <Stack direction={"row"} width="100%" spacing={5}>
          <SimpleSkeleton />
          <SimpleSkeleton />
          <SimpleSkeleton />
          <SimpleSkeleton />
        </Stack>
      </>
    );
  if (error) return <p>{error?.error ? error?.error : error?.message}</p>;
  return (
    <>
      {data?.data.slice(0, 4).map((item) => (
        <DashboardCard
          key={item.id}
          element={item}
          size={{ xs: 12, md: 6, lg: 3 }}
          images={iconMap}
        />
      ))}
    </>
  );
};

export default TopCard;
