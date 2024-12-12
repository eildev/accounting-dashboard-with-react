import PropTypes from "prop-types";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { navigation } from "../data/data";
import demoThemeProvider from "../provider/demoThemeProvider";
import PageLayout from "./PageLayout";
import logo from "../assets/img/logo/accountant-logo.png";

function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={navigation}
      branding={{
        logo: <img src={logo} alt="MUI logo" />,
        title: false,
      }}
      router={router}
      theme={demoThemeProvider}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageLayout pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutBasic.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
