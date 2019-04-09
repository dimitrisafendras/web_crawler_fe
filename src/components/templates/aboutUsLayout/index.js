import React from 'react';
import './AboutUsLayout.scss'
import {Grid} from '../../atoms';

export const AboutUsLayout = (
    {
        children
    }) =>
    <Grid
        minHeight={'100%'}
        id={'layout'}
        columns={'100px auto auto 100px'}
        gap={'14px 0'}
        areas={[
            'main main main main',
        ]}
        className={'AboutUsLayout'}
    >
        {children}
    </Grid>;