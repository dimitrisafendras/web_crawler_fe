import React, { Component } from 'react';
import axios from 'axios';
import {PrimaryButton} from './library';

import './App.scss';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }

    handleClick() {
        axios.get('https://api.openbrewerydb.org/breweries')
            .then(response => this.setState({data: response.data}))
    }

    render() {
        const data = this.state.data;
        return (
            <div className="App">
                <div id={'app-header'}>
                    LOL
                </div>
                <PrimaryButton
                    id={'fetch-btn'}
                    text={'Click'}
                    onClick={()=>this.handleClick()}
                />
                <div id={'app-main'}>
                    {data.map(i =>
                        <div key={i.id}>
                            {`${i.name}`}
                        </div>
                    )}
                </div>
                <div id={'app-footer'}>
                    LOL
                </div>
            </div>
        );
    }
}

export default App;

