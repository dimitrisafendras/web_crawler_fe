import React from 'react';
import './MainHome.scss';
import PropTypes from 'prop-types';
import { Cell } from '../../atoms';
import { ItemList } from '../../molecules';

export const MainHome = ({ id, className, area, data }) => (
  <Cell id={id} area={area} className={`HomeMain ${className}`}>
    {data && <ItemList data={data} />}
  </Cell>
);

MainHome.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  area: PropTypes.string,
  data: PropTypes.object,
};
