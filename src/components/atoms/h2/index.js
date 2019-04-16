import React from 'react';
import './H2.scss';
import PropTypes from 'prop-types';

export const H2 = ({ id, className = '', center, text }) => (
  <div
    id={id}
    className={`H2 ${className}`}
    style={{
      textAlign: center && 'center',
    }}
  >
    {text}
  </div>
);

H2.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.bool,
  text: PropTypes.string,
};
