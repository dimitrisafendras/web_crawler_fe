import React from 'react';
import './Header.scss';
import {Cell} from '../../atoms';

export const Header = (
    {
        id,
        area,
        className,
    }) =>
    <Cell
        id={id}
        area={area}
        className={`Header ${className}`}
    >
        HEADER
    </Cell>;

