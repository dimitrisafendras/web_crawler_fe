import React from 'react';
import {Cell} from '../../atoms';
import './Header.scss';

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

