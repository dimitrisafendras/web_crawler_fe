import React from 'react';
import './AppLayout.scss'
import {Grid} from '../../atoms';

export const AppLayout = (
    {
        children
    }) =>
    <Grid
        minHeight={'100vh'}
        id={'layout'}
        columns={'100px auto auto 100px'}
        rows={'48px auto 40px'}
        gap={'14px 0'}
        areas={[
            'header header header header',
            'main main main main',
            'footer footer footer footer'
        ]}
        className={'AppLayout'}
    >
        {children}
    </Grid>;