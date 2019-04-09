import React from 'react';
import './Icon.scss'

export const Icon = (
    {
        id,
        className,
        icon,
        height,
        width
    }) =>
    <img
        id={id}
        alt={id}
        className={`Icon ${className}`}
        src={icon}
        style={{
            height,
            width
        }}
    />;