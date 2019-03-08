import React from 'react';
import './Item.scss'
import {Cell, Grid} from '../../library';

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
    <Cell>
      {`${data.name}`}
    </Cell>
    <Cell>
      {`${data.city}`}
    </Cell>
    <Cell>
      {`${data.country}`}
    </Cell>
  </Grid>;
