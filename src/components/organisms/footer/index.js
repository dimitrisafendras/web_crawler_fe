import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from '../../atoms';
import './Footer.scss';

export const Footer = ({ id, className, area }) => (
  <Cell id={id} area={area} className={`Footer ${className}`} />
);

Footer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  area: PropTypes.string,
};
