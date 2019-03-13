import React from 'react';
import './Item.scss'
import {Cell, Grid} from '../../toolkit';

export const Item = (
  {
    id,
    className = '',
    data,
  }) =>
  <Grid
    id={id}
    width={'100%'}
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
