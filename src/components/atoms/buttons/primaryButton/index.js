import React from 'react';
import PropTypes from 'prop-types';

import './PrimaryButton.scss';

export const PrimaryButton = ({ id, className = '', onClick, text }) => (
  <button
    type="submit"
    id={id}
    className={`PrimaryButton ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
);

PrimaryButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};
