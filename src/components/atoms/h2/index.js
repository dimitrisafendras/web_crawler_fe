import React from 'react';
import './H2.scss'

export const H2 = (
    {
        id,
        className = '',
        center,
        text,
    }) =>
    <div
        id={id}
        className={`H2 ${className}`}
        style={{
            textAlign: center && 'center'
        }}
    >
        {text}
    </div>;