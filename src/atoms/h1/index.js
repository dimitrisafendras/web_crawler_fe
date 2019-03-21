import React from 'react';
import './H1.scss'

export const H1 = (
    {
        id,
        className = '',
        children,
    }) =>
    <div
        id={id}
        className={`H1 ${className}`}
    >
        {children}
    </div>;
