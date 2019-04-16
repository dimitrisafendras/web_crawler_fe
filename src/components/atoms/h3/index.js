import React from 'react';
import PropTypes from 'prop-types';
import './H3.scss';

export const H3 = ({ id, className = '', center, text }) => (
  <div
    id={id}
    className={`H3 ${className}`}
    style={{
      textAlign: center && 'center',
    }}
  >
    {text}
  </div>
);

H3.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.bool,
  text: PropTypes.string,
};
