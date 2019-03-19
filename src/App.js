import React, { Component } from 'react';
import './App.scss';

import {HomePage} from './pages';

class App extends Component {
    render() {
        return (
            <div className="App">
                <HomePage id={'homePage'}/>
            </div>
        );
    }
}

export default App;

