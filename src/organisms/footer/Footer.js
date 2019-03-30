import React from 'react';
import {Cell, FilterLink} from '../../atoms';
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../../modules/actions/actionTypes';
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
        <p>
            Show: <FilterLink filter={SHOW_ALL}>All</FilterLink>
            {', '}
            <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
            {', '}
            <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
        </p>
    </Cell>;