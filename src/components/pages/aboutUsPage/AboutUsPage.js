import React from 'react';
import './AboutUsPage.scss'
import {AboutUsLayout} from '../../templates';

export const AboutUsPage = (
    {
        id,
        className,
    }) => {
    return (
        <div
            id={id}
            className={`AboutUsPage ${className}`}
        >
        <AboutUsLayout/>
        </div>
  );
};