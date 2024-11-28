import { Button } from "@mui/material";

const MuiButton = ({ children, variant }) => {
  return <Button variant={variant}>{children}</Button>;
};

export default MuiButton;
