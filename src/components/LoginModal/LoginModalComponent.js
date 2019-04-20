import React from 'react';
import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tabs,
  Tab,
} from '@material-ui/core';

import LoginFormComponent from './LoginForm/LoginFormComponent';
import SignUpFormComponent from './SignUpForm/SignUpFormComponent';
import { LOGIN_TAB, SIGN_UP_TAB } from '../../helpers/constants';

const LoginModalComponent = ({
  open,
  openCloseModal,
  tab,
  switchTab,
  user,
}) => {

  const actionText = tab === LOGIN_TAB ? 'Login' : 'Sign up';

  return (
  <div>
    <Dialog
      open={open}
      onClose={openCloseModal}
    >
      <AppBar position='static'>
        <Tabs value={tab}>
          <Tab label='Login' onClick={() => switchTab(LOGIN_TAB)} />
          <Tab label='Sign up' onClick={() => switchTab(SIGN_UP_TAB)} />
        </Tabs>
      </AppBar>
      <DialogContent>
        {tab === LOGIN_TAB && <LoginFormComponent user={user} />}
        {tab === SIGN_UP_TAB && <SignUpFormComponent user={user} />}
      </DialogContent>
      <DialogActions>
        <Button onClick={openCloseModal} color="primary">
          Cancel
        </Button>
        <Button onClick={openCloseModal} color="primary">
          {actionText}
        </Button>
      </DialogActions>
    </Dialog>
  </div>
)};

export default LoginModalComponent