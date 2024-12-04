import { Box, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: "200px",
            fontWeight: "bold",
            color: "#F762C4",
          }}
        >
          404
        </Typography>
        <Typography
          variant="p"
          sx={{
            textAlign: "center",
          }}
        >
          Data Not Found
        </Typography>
      </Box>
    </Box>
  );
};

export default ErrorPage;
