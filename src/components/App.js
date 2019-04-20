import React, { Component } from 'react';
import fileDownload from 'js-file-download';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import AppBarComponent from './AppBar/AppBarComponent';
import SongListComponent from './SongList/SongListComponent';
import LoginModalComponent from './LoginModal/LoginModalComponent';
import styles from './styles';
import { getSongs, signUp, login, downloadSong } from '../helpers/api';
import { LOGIN_TAB, SIGN_UP_TAB, HOME_TAB } from '../helpers/constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      downloadedSongs: [],
      authenticated: false,
      open: false,
      tab: LOGIN_TAB,
      user: {
        name: '',
        email: '',
        password: '',
      },
      errorMessage: '',
      loginErrorMsg: '',
      drawer: false,
      menu: HOME_TAB,
    }
  }

  componentDidMount() {
    getSongs().then(data => this.setState({songs: data}));
  }

  openCloseModal = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  switchTab = (tabNumber) => {
    this.setState({tab: tabNumber});
  }

  updateMenu = (tabNumber) => {
    this.setState({menu: tabNumber});
  }

  openCloseDrawer = () => {
    this.setState(prevState => ({drawer: !prevState.drawer}));
  }

  updateForm = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value}
    });
  }

  downloadSong = (id) => {
    downloadSong({...this.state.user, songId: id}).then(data => {
      const song = this.state.songs.find(song => song.id === id);
      fileDownload(data.song, `${song.name}-${song.artist}.midi`)
      login(this.state.user).then(data => {
        this.setState({downloadedSongs: data.songs});
      });
    });
  }

  submitForm = () => {
    if (this.state.tab === SIGN_UP_TAB) {
      signUp(this.state.user).then(data => {
        if (data.status === 'true') {
          this.setState(prevState => ({authenticated: true,  open: !prevState.open}));
        } else {
          this.setState({errorMessage: data.message});
        }
      });
    } else {
      login(this.state.user).then(data => {
        if (data.status === 'true') {
          this.setState(prevState => ({
            authenticated: true,
            open: !prevState.open,
            downloadedSongs: data.songs
          }));
        } else {
          this.setState({loginErrorMsg: data.message});
        }
      })
    }
  }

  resetForm = () => {
    this.setState({
      user: { ...this.state.user, name: '', email: '', password: '' }
    })
  }

  render() {

    const title = this.state.menu === HOME_TAB ? 'Songs' : 'Downloaded songs'

    return (
      <React.Fragment>
          <LoginModalComponent
            open={this.state.open}
            tab={this.state.tab}
            user={this.state.user}
            errorMessage={this.state.errorMessage}
            loginErrorMsg={this.state.loginErrorMsg}
            drawer={this.state.drawer}
            openCloseModal={this.openCloseModal}
            switchTab={this.switchTab}
            updateForm={this.updateForm}
            resetForm={this.resetForm}
            submitForm={this.submitForm}
            />
          <AppBarComponent
            authenticated={this.state.authenticated}
            openCloseModal={this.openCloseModal}
            openCloseDrawer={this.openCloseDrawer}
            drawer={this.state.drawer}
            updateMenu={this.updateMenu}
          />
          <Typography variant='h5' className={this.props.classes.title}>{title}</Typography>
          <SongListComponent
            songs={this.state.songs}
            downloadedSongs={this.state.downloadedSongs}
            authenticated={this.state.authenticated}
            downloadSong={this.downloadSong}
            menu={this.state.menu}
          />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(App);
