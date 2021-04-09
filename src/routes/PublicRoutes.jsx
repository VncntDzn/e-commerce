import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
/** A custom wrapper for Route.
 * @param {Component} component - the component that will be rendered.\
 * @param {object} rest - the props passed from the root file.
 * @param {object} props - the props of Route component.
 */
const PublicRoutes = ({ component: Component, ...rest }) => {
  return (
    // Show the public routes
    <Route {...rest} render={(props) => <Component {...props} />} />
  );
};

PublicRoutes.propTypes = {
  component: PropTypes.elementType.isRequired,
  rest: PropTypes.object,
};
export default PublicRoutes;
