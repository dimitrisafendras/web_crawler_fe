import React, { Component } from 'react';
import axios from 'axios';

import {
  PrimaryButton,
  Grid, Cell,
} from './library';

import {
  ItemList
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
          id={'layout'}
          columns={4}
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
            <PrimaryButton
              id={'mainBtn'}
              onClick={()=> this.handleClick()}
              text={'click'}
              className={'mainBtn'}
            />
          </Cell>
          <Cell
            id={'main'}
            area={'main'}
          >
            {data && <ItemList data={data}/>}
          </Cell>
          <Cell
            id={'footer'}
            area={'footer'}
          />
        </Grid>
      </div>
    );
  }
}

export default App;

