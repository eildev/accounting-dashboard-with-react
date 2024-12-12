import { createTheme } from "@mui/material";

export const colorThemeProvider = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "50px", // Default size for all icons
        },
      },
    },
  },

  typography: {
    body1: {
      color: "#878C90",
      fontSize: "16px",
    },
    h5: {
      fontSize: "20px",
    },
    span: {
      color: "#0171FF",
    },
  },
});
