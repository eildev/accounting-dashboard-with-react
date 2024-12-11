import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

const NAVIGATION = [
  { kind: "header", title: "Main items" },
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  {
    segment: "assets-dashboard",
    title: "Assets Dashboard",
    icon: <ShoppingCartIcon />,
  },
  { kind: "divider" },
  { kind: "header", title: "Analytics" },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      { segment: "sales", title: "Sales", icon: <DescriptionIcon /> },
      { segment: "traffic", title: "Traffic", icon: <DescriptionIcon /> },
    ],
  },
  { segment: "integrations", title: "Integrations", icon: <LayersIcon /> },
];

const demoTheme = createTheme({
  cssVariables: { colorSchemeSelector: "data-toolpad-color-scheme" },
  colorSchemes: { light: true, dark: true },
  breakpoints: { values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 } },
});

function PageContent({ title }) {
  const location = useLocation();
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h4">Page: {title}</Typography>
      <Typography>Current path: {location.pathname}</Typography>
    </Box>
  );
}

PageContent.propTypes = {
  title: PropTypes.string.isRequired,
};

function MainDashboard(props) {
  const { window } = props;

  // Window handling for preview (optional)
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <BrowserRouter>
      <AppProvider
        navigation={NAVIGATION}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout>
          <Routes>
            <Route
              path="/dashboard"
              element={<PageContent title="Dashboard" />}
            />
            <Route
              path="/assets-dashboard"
              element={<PageContent title="Assets Dashboard" />}
            />
            <Route
              path="/reports/sales"
              element={<PageContent title="Sales Reports" />}
            />
            <Route
              path="/reports/traffic"
              element={<PageContent title="Traffic Reports" />}
            />
            <Route
              path="/integrations"
              element={<PageContent title="Integrations" />}
            />
            {/* Add a fallback route for 404 */}
            <Route path="*" element={<PageContent title="404 Not Found" />} />
          </Routes>
        </DashboardLayout>
      </AppProvider>
    </BrowserRouter>
  );
}

MainDashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default MainDashboard;
