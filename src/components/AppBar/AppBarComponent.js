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

import DrawerComponent from './Drawer/DrawerComponent';
import styles from './styles';

const AppBarComponent = ({
  classes,
  authenticated,
  openCloseModal,
  drawer,
  openCloseDrawer,
  updateMenu,
}) => {

  return (
  <div className={classes.root}>
    <AppBar position='static'>
      <Toolbar>
        <IconButton className={classes.menuButton} color='inherit' aria-label='Menu' onClick={openCloseDrawer}>
          {authenticated === true && <MenuIcon />}
        </IconButton>
        <Typography variant='h6' color='inherit' className={classes.grow}>
          K-Tunes
          </Typography>
        {authenticated === true
            ? <Button color='inherit' onClick={() => window.location.reload()}>Logout</Button>
            : <Button color='inherit' onClick={openCloseModal}>Login</Button>
        }
      </Toolbar>
    </AppBar>
    <DrawerComponent drawer={drawer} openCloseDrawer={openCloseDrawer} updateMenu={updateMenu} />
  </div>
)};

export default withStyles(styles)(AppBarComponent)
