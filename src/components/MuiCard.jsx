import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function MuiCard({ children, minWidth }) {
  return (
    <Card sx={{ minWidth: minWidth }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
