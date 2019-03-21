import React from 'react';
import {map} from 'lodash-es';
import {Item} from '../../molecules';
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
                    key={`${item.id}${index}`}
                    id={`${item.id}${index}`}
                    data={item}
                />
            )
        }
    </Grid>;
