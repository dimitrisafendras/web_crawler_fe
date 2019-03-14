import React, { Component } from 'react';
import axios from 'axios';

import {
    PrimaryButton,
    Grid, Cell,
} from './toolkit';

import {
    ItemList,
    Header,
    Footer,
} from './components';

import './App.scss';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }

    fetch() {
        axios.get('https://api.openbrewerydb.org/breweries')
            .then(response => this.setState({data: response.data}))
    }

    delete() {
        this.setState({data: []})
    }

    render() {
        const data = this.state.data;
        return (
            <div className="App">
                <Grid
                    minHeight={'100vh'}
                    id={'layout'}
                    columns={'100px auto auto 100px'}
                    rows={'40px auto 40px'}
                    gap={'14px 0'}
                    areas={[
                        'header header header header',
                        'fetch main main delete',
                        'footer footer footer footer'
                    ]}
                >
                    <Cell
                        id={'header'}
                        area={'header'}
                        className={'Header'}
                    >
                        <Header/>
                    </Cell>
                    <Cell
                        id={'fetch'}
                        area={'fetch'}
                    >
                        <PrimaryButton
                        id={'mainBtn'}
                        onClick={()=> this.fetch()}
                        text={'Fetch'}
                        className={'MainBtn'}
                    />
                    </Cell>
                    <Cell id={'main'} area={'main'}>
                        {data && <ItemList data={data}/>}
                    </Cell>
                    <Cell
                        id={'delete'}
                        area={'delete'}
                    >
                        <PrimaryButton
                            id={'mainBtn'}
                            onClick={()=> this.delete()}
                            text={'Delete'}
                            className={'MainBtn'}
                        />
                    </Cell>
                    <Cell
                        id={'footer'}
                        area={'footer'}
                    >
                        <Footer/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default App;

