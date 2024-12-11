import DashboardCard from "../../../components/DashboardCard";
import { assetsImage } from "../../../data/data";

const data = [
  {
    id: 1,
    title: "Bank Balance",
    value: 92137,
  },
  {
    id: 2,
    title: "Cash Balance",
    value: 92137,
  },
  {
    id: 3,
    title: "Fixed Asset",
    value: 92137,
  },
  {
    id: 4,
    title: "Stock Value",
    value: 92137,
  },
  {
    id: 5,
    title: "Receivable Amount",
    value: 92137,
  },
  {
    id: 6,
    title: "Opening Capital",
    value: 92137,
  },
];

const AssetTopCard = () => {
  return (
    <>
      {data.map((item) => (
        <DashboardCard
          key={item.id}
          element={item}
          size={{ xs: 12, md: 6, lg: 4 }}
          images={assetsImage}
        />
      ))}
    </>
  );
};

export default AssetTopCard;
