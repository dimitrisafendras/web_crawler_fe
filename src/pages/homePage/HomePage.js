import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../modules/actions/actions';

import './HomePage.scss';

import {
    PrimaryBtnWithCell
} from '../../molecules';

import {
    Header,
    Footer,
    MainHome,
} from '../../organisms';

import {
    HomeLayout
} from '../../templates';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.props.actions.fetchStuff();
    }

    onFetch() {

    }

    onDelete() {
    }

    render() {
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
                <MainHome
                    id={'main'}
                    area={'main'}
                    data={[]}
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

function mapStateToProps(state) {
    return {
        data: state.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);