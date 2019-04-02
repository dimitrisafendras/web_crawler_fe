import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../modules/actions/actions';

import './HomePage.scss';

import {
    PrimaryBtnWithCell
} from '../../molecules';

import {
    MainHome,
} from '../../organisms';

import {
    HomeLayout
} from '../../templates';

class HomePage extends Component {

    onFetch() {
        this.props.actions.fetchData();
    }

    onDelete() {
        this.props.actions.deleteData();
    }

    render() {
        const { fetchedData=[] } = this.props;
        return (
            <HomeLayout>
                <PrimaryBtnWithCell
                    id={'fetch'}
                    area={'fetch'}
                    onClick={()=> this.onFetch()}
                    text={'Fetch'}
                />
                <MainHome
                    id={'main'}
                    area={'main'}
                    data={fetchedData}
                />
                <PrimaryBtnWithCell
                    id={'delete'}
                    area={'delete'}
                    onClick={()=> this.onDelete()}
                    text={'Delete'}
                />
            </HomeLayout>
        );
    }
}

//FIXME create compose for map, dispach and connect
function mapStateToProps(state) {
    return {
        fetchedData: state.dataStore.fetchedData
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