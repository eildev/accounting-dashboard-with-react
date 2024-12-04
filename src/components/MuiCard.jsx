import { useTheme } from "@emotion/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function MuiCard({ children, minWidth }) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        minWidth: minWidth,
        backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#FAFAFA",
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
}
