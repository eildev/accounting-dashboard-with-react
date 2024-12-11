import PropTypes from "prop-types";
import Dashboard from "../pages/Dashboard/Dashboard";
import AssetDashboard from "../pages/AssetDashboard/AssetDashboard";

const PageLayout = ({ pathname }) => {
  // return <Dashboard />;
  // return <>{children}</>;
  // return (
  //   <>
  //     <h2>This is {pathname} page</h2>
  //   </>
  // );

  if (pathname === "/dashboard") {
    return <Dashboard />;
  } else if (pathname === "/assets-dashboard") {
    return <AssetDashboard />;
  } else if (pathname === "/bank") {
    window.location.href = "/bank";
    return null;
  }
};

PageLayout.propTypes = {
  pathname: PropTypes.string.isRequired,
};
export default PageLayout;
