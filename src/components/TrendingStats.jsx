import { TrendingUpRounded } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";

const TrendingStats = (revenue) => {
  return (
    <Stack
      direction="row"
      justifyContent="start"
      alignItems="center"
      spacing={0}
      sx={{ marginBottom: 2 }}
    >
      <Typography variant="body2" sx={{ color: "#1CAF00" }}>
        {revenue} %
      </Typography>
      <Typography variant="body2" sx={{ color: "#1CAF00" }}>
        <TrendingUpRounded />
      </Typography>
    </Stack>
  );
};

export default TrendingStats;
