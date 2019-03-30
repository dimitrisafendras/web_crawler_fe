import React, { Component } from 'react';
import '../../App.scss';
import {AppLayout} from '../../templates/appLayout/AppLayout';
import {Footer, Header} from '../../organisms';

export class App extends Component {
    render() {
        console.log('here', )
        return (
            <AppLayout className="App">
                <Header area={'header'}/>
                {this.props.children}
                <Footer area={'footer'}/>
            </AppLayout>
        );
    }
}
