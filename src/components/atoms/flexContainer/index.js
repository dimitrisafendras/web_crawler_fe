import React from 'react';
import './FlexContainer.scss'
//FIXME
export const FlexContainer = (
    {
        id,
        className = '',
        children,
        column,
        noWrap,
        justifyContent = 'center',
        alignItems = 'center',
        // alignContent = 'flex-start',
    }) =>
    <div
        id={id}
        className={`FlexContainer ${className}`}
        style={{
            flexDirection: column ? 'column' : 'row',
            flexWrap: noWrap ? 'noWrap' : 'wrap',
            justifyContent,
            alignItems,
            // alignContent: `${alignContent}`
        }}
    >
        {children}
    </div>;
