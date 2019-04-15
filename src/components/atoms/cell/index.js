import React from 'react';
import PropTypes from 'prop-types';

import './Cell.scss';

export const Cell = ({
  id,
  className = '',
  width = '100%',
  height = '100%',
  gridColumnStart,
  gridRowStart,
  gridColumnEnd,
  gridRowEnd,
  centerContent = false,
  area,
  children,
  alignSelf,
  justifySelf,
}) => (
  <div
    id={id}
    className={`Cell ${className}`}
    style={{
      height,
      width,
      gridColumnStart,
      gridRowStart,
      gridColumnEnd: `span ${gridColumnEnd}`,
      gridRowEnd: `span ${gridRowEnd}`,
      textAlign: centerContent ? 'center' : '',
      gridArea: area,
      alignSelf,
      justifySelf,
    }}
  >
    {children}
  </div>
);

Cell.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  area: PropTypes.string,
  alignSelf: PropTypes.string,
  justifySelf: PropTypes.string,
};

Cell.defaultProps = {
  id: '',
  className: '',
  width: '',
  height: '',
  area: '',
  alignSelf: '',
  justifySelf: '',
};
