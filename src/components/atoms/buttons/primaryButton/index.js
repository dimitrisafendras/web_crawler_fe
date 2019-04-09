import React from 'react';
import './PrimaryButton.scss'

export const PrimaryButton = (
    {
        id,
        className,
        onClick,
        text,
    }) =>
    <button
        id={id}
        className={`PrimaryButton ${className}`}
        onClick={onClick}
    >
        {text}
    </button>;


