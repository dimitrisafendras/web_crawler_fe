import React from 'react';
import './Item.scss'
import {Cell, Grid} from '../../atoms';

export const Item = (
    {
        id,
        className = '',
        data,
    }) =>
    <Grid
        id={id}
        className={`Item ${className}`}
    >
        {/*//TODO refactor below with map and destructured data*/}
        <Cell centerContent>
            {`${data.name}`}
        </Cell>
        <Cell centerContent>
            {`${data.city}`}
        </Cell>
        <Cell centerContent>
            {`${data.country}`}
        </Cell>
    </Grid>;
