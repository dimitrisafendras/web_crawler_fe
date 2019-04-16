import React from 'react';
import './H1.scss';
import PropTypes from 'prop-types';

export const H1 = ({ id, className = '', center, text }) => (
  <div
    id={id}
    className={`H1 ${className}`}
    style={{
      textAlign: center && 'center',
    }}
  >
    {text}
  </div>
);

H1.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.bool,
  text: PropTypes.string,
};
