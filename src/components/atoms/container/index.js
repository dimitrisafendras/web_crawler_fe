import React from 'react';
import './Container.scss'

export const Container = (
    {
        id,
        className,
        children
    }) =>
    <div
        id={id}
        className={`Container ${className}`}
    >
        {children}
    </div>;