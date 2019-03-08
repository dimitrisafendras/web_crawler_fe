import React from 'react';
import './gridContainer.scss';

const GridContainer = (
    {
        id,
        className,
        children,
    }) =>
    <div
        id={id}
        className={`GridContainer ${className}`}
    >
        {children}
    </div>;

export default GridContainer;
