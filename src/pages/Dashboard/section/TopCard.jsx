import DashboardCard from "../../../components/DashboardCard";
import ErrorPage from "../../../components/ErrorPage";
import Loading from "../../../components/Loading";
import { iconMap } from "../../../data/data";
import { useGetDataQuery } from "../../../redux/features/api/dashboardApiSlice";

const TopCard = () => {
  const { data, error, isLoading } = useGetDataQuery();

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage />;
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
