import React from 'react';
import './HomeMain.scss'
import {Cell} from '../../atoms';
import {ItemList} from '../../molecules';

export const HomeMain = (
    {
        id,
        className,
        area,
        data,
    }) => {
    return (
        <Cell
            id={id}
            area={area}
            className={`HomeMain ${className}`} 
        >
            {data && <ItemList data={data}/>}
        </Cell>
  );
};