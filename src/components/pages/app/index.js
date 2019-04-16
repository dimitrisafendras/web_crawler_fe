import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import { AppLayout } from '../../templates/appLayout';
import { Footer, Header } from '../../organisms';
import { Cell } from '../../atoms';

export const App = ({ id, className, children }) => (
  <AppLayout id={id} className={`App ${className}`}>
    <Header area="header" />
    <Cell area="main">{children}</Cell>
    <Footer area="footer" />
  </AppLayout>
);

App.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
