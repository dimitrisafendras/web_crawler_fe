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
        data, (item, index) =>
          <Item
            key={item.id}
            id={item.id}
            data={data[index]}
          />
      )
    }
  </div>;
