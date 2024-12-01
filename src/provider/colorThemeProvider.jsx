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
    h4: {
      fontSize: "32px",
    },
    span: {
      color: "#0171FF",
    },
  },
});
