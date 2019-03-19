import React, { Component } from 'react';
import {fetch} from './api';
import './App.scss';

import {PrimaryBtnWithCell} from './molecules';
import {
    Header,
    Footer, HomeMain,
} from './organisms';
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
                    <PrimaryBtnWithCell
                        id={'fetch'}
                        area={'fetch'}
                        onClick={()=> this.onFetch()}
                        text={'Fetch'}
                    />
                    <HomeMain
                        id={'main'}
                        area={'main'}
                        data={data}
                    />
                    <PrimaryBtnWithCell
                        id={'delete'}
                        area={'delete'}
                        onClick={()=> this.onDelete()}
                        text={'Delete'}
                    />
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

