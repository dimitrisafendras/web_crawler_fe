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

    handleClick() {
        axios.get('https://api.openbrewerydb.org/breweries')
            .then(response => this.setState({data: response.data}))
    }

    render() {
        const data = this.state.data;
        return (
            <div className="App">
                <Grid
                    minHeight={'100vh'}
                    id={'layout'}
                    columns={'20px auto auto 20px'}
                    rows={'40px auto 40px'}
                    gap={'14px 0'}
                    areas={[
                        'header header header header',
                        '. main main .',
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
                        id={'main'}
                        area={'main'}
                    >
                        <PrimaryButton
                            id={'mainBtn'}
                            onClick={()=> this.handleClick()}
                            text={'Click'}
                            className={'MainBtn'}
                        />
                        {data && <ItemList data={data}/>}
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

