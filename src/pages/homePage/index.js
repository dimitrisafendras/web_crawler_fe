import React, { Component } from 'react';
import './HomePage.scss';

import {
    PrimaryBtnWithCell
} from '../../molecules/primaryBtnWithCell';
import {
    Header,
    Footer,
    HomeMain,
} from '../../organisms';
import {
    HomeLayout
} from '../../templates';
import {fetch} from '../../api';

export class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }

    onFetch() {
        fetch()
            .then(response =>
                this.setState({
                    data: response.data.devices
                })
            )
    }

    onDelete() {
        this.setState({data: []})
    }

    render() {
        const data = this.state.data;
        return (
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
        );
    }
}