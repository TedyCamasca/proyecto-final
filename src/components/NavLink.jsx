import { NavLink as NavLinkRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const NavLink = ({ to, children, ...props }) => (
  <NavLinkRouter
    {...props}
    className={({ isActive }) => (isActive ? "is-active" : undefined)}
    to={to}
  >
    {children}
  </NavLinkRouter>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
