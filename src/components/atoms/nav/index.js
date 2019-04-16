import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLink.scss';
import PropTypes from 'prop-types';

// TODO: navlinktxt, navlinkicon
export const Nav = ({
  navLink,
  children,
  className = '',
  activeClassName = '',
}) => (
  <NavLink
    to={navLink}
    className={`NavLink NavLink--normal ${className}`}
    activeClassName={`NavLink NavLink--active ${activeClassName}`}
  >
    {children}
  </NavLink>
);

Nav.propTypes = {
  navLink: PropTypes.string,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
