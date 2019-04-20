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
      user: {
        name: '',
        email: '',
        password: '',
      }
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

  updateForm = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value}
    });
  }

  submitForm = () => {
    console.log(this.state.user)
  }

  resetForm = () => {
    this.setState({
      user: { ...this.state.user, name: '', email: '', password: '' }
    })
  }

  render() {

    return (
      <React.Fragment>
        <LoginModalComponent
          open={this.state.open}
          tab={this.state.tab}
          user={this.state.user}
          openCloseModal={this.openCloseModal}
          switchTab={this.switchTab}
          updateForm={this.updateForm}
          resetForm={this.resetForm}
          submitForm={this.submitForm}
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
