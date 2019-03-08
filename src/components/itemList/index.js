import React from 'react';
import {map} from 'lodash-es';
import {Item} from '../item';

import './ItemList.scss'

export const ItemList = (
  {
    id,
    className,
    data
  }) =>
  <div
    id={id}
    className={`ItemList ${className}`}
  >
    {
      map(
        data, i =>
          <Item
            key={i.id}
            id={i.id}
            data={data}
          />
      )
    }
  </div>;
