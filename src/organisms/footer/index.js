import React from 'react';
import './Footer.scss';
import {Cell} from '../../atoms';

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