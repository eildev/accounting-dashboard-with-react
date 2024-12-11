import React from "react";
import { Grid2 } from "@mui/material";
import AssetTopCard from "./section/AssetTopCard";
import TotalLeisure from "./section/TotalLeisure";
import BankTransactionDetails from "./section/BankTransactionDetails";

const AssetDashboard = () => {
  return (
    <>
      <Grid2 container sx={{ margin: 2 }} spacing={2}>
        <AssetTopCard />
      </Grid2>
      <Grid2 container sx={{ margin: 2 }} spacing={2}>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <TotalLeisure />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <BankTransactionDetails />
        </Grid2>
      </Grid2>
    </>
  );
};

export default AssetDashboard;
