import { useState, useEffect } from "react";
import ChartTitle from "../../../components/ChartTitle";
import MuiCard from "../../../components/MuiCard";
import { options } from "../../../data/data";
import { Grid2 } from "@mui/material";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetCostInOutQuery } from "../../../redux/features/api/dashboardApiSlice";

const TotalCost = () => { 
  const { data } = useGetCostInOutQuery();
  const [chartData, setChartData] = useState([]);

  // Map the API data dynamically if it's available
  useEffect(() => {
    if (data?.payableData && data?.receivableData) {
      const xLabels = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];

      const dynamicData = xLabels.map((label, index) => ({
        month: label,
        Receivable: data.receivableData[index],
        Payable: data.payableData[index],
      }));

      setChartData(dynamicData);
    }
  }, [data]);

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <MuiCard>
      <ChartTitle
        title="Total cost in and out"
        subtitle="Jan 2021 - Jun 2021"
        selectProps={{
          label: "Year",
          value: value,
          handleChange: handleChange,
          options: options,
        }}
      />
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <div style={{ width: "100%", height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Receivable" fill="#8884d8" radius={[5, 5, 0, 0]} />
                <Bar dataKey="Payable" fill="#82ca9d" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Grid2>
      </Grid2>
    </MuiCard>
  );
};

export default TotalCost;
