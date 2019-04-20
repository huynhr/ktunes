import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const AppBarComponent = ({
  classes,
  authenticated,
  openCloseModal,
}) => {

  let loginButton = authenticated === true ? 'Logout' : 'Login';

  return (
  <div className={classes.root}>
    <AppBar position='static'>
      <Toolbar>
        <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' color='inherit' className={classes.grow}>
          K-Tunes
          </Typography>
        <Button color='inherit' onClick={openCloseModal}>{loginButton}</Button>
      </Toolbar>
    </AppBar>
  </div>
)};

export default withStyles(styles)(AppBarComponent)
