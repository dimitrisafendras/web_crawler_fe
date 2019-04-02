import React from 'react';
import {Cell, PrimaryButton} from '../../atoms';
import './PrimaryBtnWithCell.scss'

export const PrimaryBtnWithCell = (
    {
        id,
        area,
        className,
        onClick,
        text,
    }) =>
    <Cell
        id={id}
        area={area}
        className={`PrimaryBtnWithCell ${className}`}
    >
        <PrimaryButton onClick={onClick} text={text} />
    </Cell>;