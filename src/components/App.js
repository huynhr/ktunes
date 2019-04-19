import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

import AppBarComponent from './AppBar/AppBarComponent';
import SongListComponent from './SongList/SongListComponent';

import { getSongs } from '../helpers/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    }
  }

  componentDidMount() {
    getSongs().then( data => this.setState({songs: data}));
  }

  render() {
    return (
      <React.Fragment>
        <AppBarComponent />
        <SongListComponent songs={this.state.songs} />
      </React.Fragment>
    )
  }
}

export default App;
