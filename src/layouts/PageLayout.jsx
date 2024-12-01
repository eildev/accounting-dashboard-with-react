import PropTypes from "prop-types";
import Dashboard from "../pages/Dashboard/Dashboard";

const PageLayout = ({ pathname }) => {
  return <Dashboard />;
};

PageLayout.propTypes = {
  pathname: PropTypes.string.isRequired,
};
export default PageLayout;
