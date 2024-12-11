import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { Grid2, Skeleton } from "@mui/material";
import MuiCard from "../../../components/MuiCard";
import { useState } from "react";
import { options } from "../../../data/data";
import ChartTitle from "../../../components/ChartTitle";
import { useGetSalesAnalyticsQuery } from "../../../redux/features/api/dashboardApiSlice";

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
  color: "#0056FD",
}));

function CustomLabel({ x, y, label }) {
  return (
    <StyledText x={x} y={y + 20}>
      {" "}
      {/* Move label down by adjusting the y value */}
      {label}
    </StyledText>
  );
}

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function SalesAnalytics() {
  const { data, error, isLoading } = useGetSalesAnalyticsQuery();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  if (isLoading)
    return <Skeleton variant="rectangular" width="100%" height="100%" />;
  if (error) return <p>{error?.error ? error?.error : error?.message}</p>;

  return (
    <MuiCard>
      <ChartTitle
        title="Sales Analytics"
        subtitle="Jan 2021 - Jun 2021"
        selectProps={{
          label: "Year",
          value: value,
          handleChange: handleChange,
          options: options,
        }}
      />
      <Grid2 container>
        <Grid2 size={{ sm: 6, md: 12 }}>
          <PieChart
            series={[
              {
                data: data?.data || [],
                innerRadius: 70,
                label: ({ x, y, label }) => (
                  <CustomLabel x={x} y={y} label={label} />
                ),
              },
            ]}
            {...size}
          >
            <PieCenterLabel>{data?.total}</PieCenterLabel>
          </PieChart>
        </Grid2>
      </Grid2>
    </MuiCard>
  );
}
