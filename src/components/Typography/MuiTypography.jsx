import { Typography } from "@mui/material";
import React from "react";

export const Paragraph = ({ children }) => {
  return (
    <Typography
      variant="p"
      sx={{ fontSize: { sm: "12px", md: "14px", color: "#898989" } }}
    >
      {children}
    </Typography>
  );
};
