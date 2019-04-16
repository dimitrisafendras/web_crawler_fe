import React from 'react';
import './Icon.scss';
import PropTypes from 'prop-types';

export const Icon = ({ id, className = '', icon, height, width }) => (
  <img
    id={id}
    alt={id}
    className={`Icon ${className}`}
    src={icon}
    style={{
      height,
      width,
    }}
  />
);

Icon.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.any,
  height: PropTypes.string,
  width: PropTypes.string,
};
