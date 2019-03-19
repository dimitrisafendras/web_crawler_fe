import React from 'react';
import './HomeLayout.scss'
import {Grid} from '../../atoms';

export const HomeLayout = (
    {
        children
    }) =>
    <Grid
        minHeight={'100vh'}
        id={'layout'}
        columns={'100px auto auto 100px'}
        rows={'40px auto 40px'}
        gap={'14px 0'}
        areas={[
            'header header header header',
            'fetch main main delete',
            'footer footer footer footer'
        ]}>
        {children}
    </Grid>;