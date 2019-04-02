import React from 'react';
import './HomeLayout.scss'
import {Grid} from '../../atoms';

export const HomeLayout = (
    {
        children
    }) =>
    <Grid
        minHeight={'100%'}
        id={'layout'}
        columns={'100px auto auto 100px'}
        gap={'14px 0'}
        areas={[
            'fetch main main delete',
        ]}
        className={'HomeLayout'}
    >
        {children}
    </Grid>;