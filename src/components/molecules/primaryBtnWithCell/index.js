import React from 'react';
import PropTypes from 'prop-types';
import { Cell, PrimaryButton } from '../../atoms';
import './PrimaryBtnWithCell.scss';

export const PrimaryBtnWithCell = ({ id, area, className, onClick, text }) => (
  <Cell id={id} area={area} className={`PrimaryBtnWithCell ${className}`}>
    <PrimaryButton onClick={onClick} text={text} />
  </Cell>
);

PrimaryBtnWithCell.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  area: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};
