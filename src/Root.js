import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux';

export const Root = ({ store }) => (
        <Provider store={store}>
            <Router>
                <Route path="/:filter?" component={App} />
            </Router>
        </Provider>
    )