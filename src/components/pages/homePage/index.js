import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../modules/actions';

import './HomePage.scss';

import { PrimaryBtnWithCell } from '../../molecules';

import { MainHome } from '../../organisms';

import { HomeLayout } from '../../templates';

class HomePage extends Component {
  onFetch() {
    const { actions } = this.props;
    actions.initCrawler();
  }

  onDelete() {
    const { actions } = this.props;
    actions.deleteData();
  }

  render() {
    const { fetchedData = [] } = this.props;
    return (
      <HomeLayout>
        <PrimaryBtnWithCell
          id="fetch"
          area="fetch"
          onClick={() => this.onFetch()}
          text="Fetch"
        />
        <MainHome id="main" area="main" data={fetchedData} />
        <PrimaryBtnWithCell
          id="delete"
          area="delete"
          onClick={() => this.onDelete()}
          text="Delete"
        />
      </HomeLayout>
    );
  }
}
// FIXME proper prottypes
HomePage.propTypes = {
  actions: PropTypes.any,
  fetchedData: PropTypes.string,
};
// FIXME create compose for map, dispach and connect
function mapStateToProps(state) {
  return {
    fetchedData: state.dataStore.fetchedData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export const ConnectedHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
