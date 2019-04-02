import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Provider} from 'react-redux';
import {AboutUsPage, HomePage, App} from './components/pages';

export const Root = ({ store }) => (
        <Provider store={store}>
            <Router>
                <App>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/aboutUs' component={AboutUsPage}/>
                </App>
            </Router>
        </Provider>
    )