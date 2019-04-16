import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';

export const Container = ({ id, className = '', children }) => (
  <div id={id} className={`Container ${className}`}>
    {children}
  </div>
);

Container.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
