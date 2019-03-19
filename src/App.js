import React, { Component } from 'react';

import {
    PrimaryButton,
    Grid, Cell,
} from './atoms';

import {
    ItemList,
} from './molecules';

import {
    Header,
    Footer,
} from './organisms';

import {fetch} from './api';

import './App.scss';
import {HomeLayout} from './templates';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }

    onFetch() {
        fetch()
            .then(
                response => { console.log('>>>', response.data)
                    this.setState(
                        {data: response.data}
                    )}
            )
    }

    onDelete() {
        this.setState({data: []})
    }

    render() {
        const data = this.state.data;
        return (
            <div className="App">
                <HomeLayout>
                    <Header
                        id={'header'}
                        area={'header'}
                    />
                    <Cell
                        id={'fetch'}
                        area={'fetch'}
                    >
                        <PrimaryButton
                            id={'mainBtn'}
                            onClick={()=> this.onFetch()}
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
                            onClick={()=> this.onDelete()}
                            text={'Delete'}
                            className={'MainBtn'}
                        />
                    </Cell>
                    <Footer
                        id={'footer'}
                        area={'footer'}
                    />
                </HomeLayout>
            </div>
        );
    }
}

export default App;

