import React from 'react';
import PropTypes from "prop-types";

import './Cell.scss'

export const Cell = (
    {
        id,
        className,
        width = '100%',
        height = '100%',
        gridColumnStart,
        gridRowStart,
        gridColumnEnd,
        gridRowEnd,
        center,
        area,
        children,
        alignSelf,
        justifySelf,
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
            'alignSelf': alignSelf,
            'justifySelf': justifySelf,
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
    area: PropTypes.string,
    alignSelf: PropTypes.string,
    justifySelf: PropTypes.string
};