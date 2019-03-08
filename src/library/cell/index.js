import React from 'react';
import PropTypes from "prop-types";

import './Cell.scss'

export const Cell = (
    {
        id,
        className,
        width,
        height,
        gridColumnStart,
        gridRowStart,
        gridColumnEnd,
        gridRowEnd,
        center,
        area,
        children,
    }) =>
    <div
        id={id}
        className={`Cell ${className}`}
        style={{
            'height': height,
            'width': width,
            'gridColumnStart': gridColumnStart,
            'gridRowStart': gridRowStart,
            'gridColumnEnd': `span ${gridColumnEnd}`,
            'gridRowEnd': `span ${gridRowEnd}`,
            'textAlign': center,
            'gridArea': area,
        }}
    >
        {children}
    </div>;

Cell.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    middle: PropTypes.bool,
    center: PropTypes.bool,
    area: PropTypes.string
};