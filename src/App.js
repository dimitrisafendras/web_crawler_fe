import React, { Component } from 'react';
import axios from 'axios';

import './App.scss';
import GridContainer from './library/gridContainer';

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
                <GridContainer id={'App-header'}>
                    LOL
                </GridContainer>
                <GridContainer id={'App-main'}>
                    <button onClick={() => this.handleClick()}>
                        request
                    </button>
                    {data.map(i =>
                        <div key={i.id}>
                            {`${i.name}`}
                        </div>
                    )}
                </GridContainer>
                <GridContainer id={'App-footer'}>
                    LOL
                </GridContainer>
            </div>
        );
    }
}

export default App;

