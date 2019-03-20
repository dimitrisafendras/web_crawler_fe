import React from 'react';
import './Icon.scss'

export const Icon = (
    {
        id,
        className,
        icon,
    }) =>
    <img
        id={id}
        alt={id}
        className={`Icon ${className}`}
        src={icon}
    />;