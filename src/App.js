import React, { Component } from 'react';
import axios from 'axios';

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
                <header className="App-header">
                </header>
                <main>
                    <button onClick={() => this.handleClick()}>
                        request
                    </button>
                    {data.map(i =>
                        <div key={i.id}>
                            {`${i.name}`}
                        </div>
                    )}
                </main>
                <footer/>
            </div>
        );
    }
}

export default App;

