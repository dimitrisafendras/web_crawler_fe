import React from 'react';
import './AboutUsPage.scss';
import PropTypes from 'prop-types';
import { AboutUsLayout } from '../../templates';

export const AboutUsPage = ({ id, className }) => {
  return (
    <div id={id} className={`AboutUsPage ${className}`}>
      <AboutUsLayout />
    </div>
  );
};

AboutUsPage.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
};
