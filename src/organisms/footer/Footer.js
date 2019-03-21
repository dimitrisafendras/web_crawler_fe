import React from 'react';
import {Cell} from '../../atoms';
import './Footer.scss';

export const Footer = (
    {
        id,
        className,
        area,
    }) =>
    <Cell
        id={id}
        area={area}
        className={`Footer ${className}`}
    >
        Footer
    </Cell>;