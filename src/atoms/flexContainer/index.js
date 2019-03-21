import React from 'react';
import './FlexContainer.scss'

export const FlexContainer = (
    {
        id,
        className,
        children,
    }) =>
    <div
        id={id}
        className={`FlexContainer ${className}`}
    >
        {children}
    </div>;
