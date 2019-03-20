import React from 'react';
import './MainHome.scss'
import {Cell} from '../../atoms';
import {ItemList} from '../../molecules';

export const MainHome = (
    {
        id,
        className,
        area,
        data,
    }) =>
    <Cell
        id={id}
        area={area}
        className={`HomeMain ${className}`}
    >
        {data && <ItemList data={data}/>}
    </Cell>;