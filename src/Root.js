import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Provider} from 'react-redux';
import {AboutUsPage, ConnectedHomePage, App} from './components/pages';

export const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path='/' component={ConnectedHomePage}/>
                <Route path='/aboutUs' component={AboutUsPage}/>
            </App>
        </Router>
    </Provider>
);