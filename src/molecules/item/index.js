import React from 'react';
import './Item.scss'
import {FlexContainer, H3} from '../../atoms';

export const Item = (
    {
        id,
        className = '',
        data,
    }) =>
    <FlexContainer
        column
        id={id}
        className={'Item'}
    >
        {/*FIXME MAP*/}
        <H3 center text={`${data.name}`} />
        <H3 text={`New price ${data.newPrice} $`} />
        <H3 text={`Old price ${data.oldPrice} $`} />
        <H3 text={`Discount ${data.discountPercentage} %`} />
    </FlexContainer>;
