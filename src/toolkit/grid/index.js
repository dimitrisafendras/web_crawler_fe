import React from 'react';
import PropTypes from 'prop-types';
import {
    getFr,
    formatAreas,
} from '../../utils/utils';

import './Grid.scss'

export const Grid = (
    {
        id,
        className = '',
        height = 'auto',
        minHeight = '',
        flow = 'row',
        minRowHeight = '20px',
        rows = 1,
        columns = 1,
        //FIXME GAP PROPERTIES BUG EACH OTHER
        columnGap = '',
        rowGap = '',
        gap = '',
        areas,
        justifyItems,
        justifyContent,
        alignContent,
        alignItems,
        children,
    }) =>
    <div
        id={id}
        className={`Grid ${className}`}
        style={{
            'height': height,
            'minHeight': minHeight,
            'gridAutoFlow': flow,
            'gridAutoRows': `minmax(${minRowHeight}, auto)`,
            'gridTemplateRows': getFr(rows),
            'gridTemplateColumns': getFr(columns),
            'columnGap': columnGap,
            'rowGap': rowGap,
            'gap': gap,
            'gridTemplateAreas': formatAreas(areas),
            'justifyItems': justifyItems,
            'justifyContent': justifyContent,
            'alignContent': alignContent,
            'alignItems': alignItems,
        }}
    >
        {children}
    </div>;

Grid.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    columnGap: PropTypes.string,
    rowGap: PropTypes.string,
    height: PropTypes.string,
    minRowHeight: PropTypes.string,
    flow: PropTypes.string,
    rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    areas: PropTypes.arrayOf(PropTypes.string),
    justifyItems: PropTypes.string,
    justifyContent: PropTypes.string,
    alignContent: PropTypes.string,
    alignItems: PropTypes.string,
};

export default Grid;