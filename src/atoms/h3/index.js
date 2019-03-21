import React from 'react';
import './H3.scss'

export const H3 = (
    {
        id,
        className = '',
        children,
    }) =>
    <div
        id={id}
        className={`H3 ${className}`}
    >
        {children}
    </div>;