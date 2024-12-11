import { SwapHorizontalCircleOutlined } from "@mui/icons-material";
import MuiCard from "../../../components/MuiCard";
import { Stack, Typography } from "@mui/material";
import MuiTable from "../../../components/MuiTable";
import { useTheme } from "@emotion/react";

const BankTransactionDetails = () => {
  const theme = useTheme();
  return (
    <MuiCard>
      <Stack direction="row" spacing={1}>
        <Typography>
          <SwapHorizontalCircleOutlined />
        </Typography>
        <Typography>Bank Transaction Details</Typography>
      </Stack>
      <hr
        sx={{
          backgroundColor:
            theme.palette.mode === "dark" ? "#E3E3E3" : "#E3E3E3",
          height: "1px",
        }}
      />
      <MuiTable />
    </MuiCard>
  );
};

export default BankTransactionDetails;
