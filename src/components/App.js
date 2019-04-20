import React, { Component } from 'react';

import AppBarComponent from './AppBar/AppBarComponent';
import SongListComponent from './SongList/SongListComponent';
import LoginModalComponent from './LoginModal/LoginModalComponent';
import { getSongs } from '../helpers/actions';
import { LOGIN_TAB } from '../helpers/constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      authenticated: false,
      open: false,
      tab: LOGIN_TAB,
    }
  }

  componentDidMount() {
    getSongs().then( data => this.setState({songs: data}));
  }

  openCloseModal = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  switchTab = (tabNumber) => {
    this.setState({tab: tabNumber});
  }

  render() {
    return (
      <React.Fragment>
        <LoginModalComponent
          open={this.state.open}
          tab={this.state.tab}
          openCloseModal={this.openCloseModal}
          switchTab={this.switchTab}
        />
        <AppBarComponent
          authenticated={this.state.authenticated}
          openCloseModal={this.openCloseModal}
        />
        <SongListComponent songs={this.state.songs} />
      </React.Fragment>
    )
  }
}

export default App;
