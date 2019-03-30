import React from 'react';
import './AboutUsLayout.scss'
import {Grid} from '../../atoms';

export const AboutUsLayout = (
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
            'fetch main main delete',
            'footer footer footer footer'
        ]}
        className={'AboutUsLayout'}
    >
        {children}
    </Grid>;