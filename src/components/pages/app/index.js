import React from 'react';
import './App.scss';
import { AppLayout } from '../../templates/appLayout';
import { Footer, Header } from '../../organisms';
import { Cell } from '../../atoms';

export const App = ({ id, className, children }) => (
  <AppLayout className="App">
    <Header area="header" />
    <Cell area="main">{children}</Cell>
    <Footer area="footer" />
  </AppLayout>
);
