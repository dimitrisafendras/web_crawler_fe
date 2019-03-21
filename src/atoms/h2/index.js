import React from 'react';
import './H2.scss'

export const H2 = (
    {
        id,
        className = '',
        children,
    }) =>
    <div
        id={id}
        className={`H2 ${className}`}
    >
        {children}
    </div>;