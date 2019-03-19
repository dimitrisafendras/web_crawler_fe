import React from 'react';
import {map} from 'lodash-es';
import {Item} from '../item';
import {Grid} from '../../atoms';
import './ItemList.scss';

export const ItemList = (
    {
        id,
        className = '',
        data = [],
    }) =>
    <Grid
        id={id}
        className={`ItemList ${className}`}
        gap={'14px'}
        justifyItems={'center'}
    >
        {
            map(data, (item, index) =>
                <Item
                    key={item.id}
                    id={item.id}
                    data={data[index]}
                />
            )
        }
    </Grid>;
