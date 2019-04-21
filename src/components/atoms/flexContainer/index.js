import React from 'react';
import PropTypes from 'prop-types';
import './FlexContainer.scss';
// FIXME
export const FlexContainer = ({
  id,
  className = '',
  children,
  column,
  noWrap,
  justifyContent = 'center',
  alignItems = 'center',
  // alignContent = 'flex-start',
}) => (
  <div
    id={id}
    className={`FlexContainer ${className}`}
    style={{
      flexDirection: column ? 'column' : 'row',
      flexWrap: noWrap ? 'noWrap' : 'wrap',
      justifyContent,
      alignItems,
      // alignContent: `${alignContent}`
    }}
  >
    {children}
  </div>
);

FlexContainer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  column: PropTypes.bool,
  noWrap: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
};
