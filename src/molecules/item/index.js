import React from 'react';
import './Item.scss'
import {Cell, Grid, H3} from '../../atoms';

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
            <H3> {`${data.name}`} </H3>
        </Cell>
        <Cell centerContent>
            <H3> {`New price ${data.newPrice} $`} </H3>
        </Cell>
        <Cell centerContent>
            <H3> {`Old price ${data.oldPrice} $`} </H3>
        </Cell>
        <Cell centerContent>
            <H3> {`Discount ${data.discountPercentage} %`} </H3>
        </Cell>
    </Grid>;
