import React from 'react';
import './H1.scss'

export const H1 = (
    {
        id,
        className = '',
        center,
        text,
    }) =>
    <div
        id={id}
        className={`H1 ${className}`}
        style={{
            textAlign: center && 'center'
        }}
    >
        {text}
    </div>;
