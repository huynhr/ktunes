import React from 'react';
import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
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
  updateForm,
  resetForm,
  submitForm,
  errorMessage,
  loginErrorMsg,
}) => {

  const actionText = tab === LOGIN_TAB ? 'Login' : 'Sign up';

  return (
  <form onSubmit={submitForm}>
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
          {tab === LOGIN_TAB && <LoginFormComponent user={user} updateForm={updateForm} loginErrorMsg={loginErrorMsg} />}
          {tab === SIGN_UP_TAB && <SignUpFormComponent user={user} updateForm={updateForm} errorMessage={errorMessage} />}
      </DialogContent>
      <DialogActions>
        <Button onClick={openCloseModal} color="primary">
          Cancel
        </Button>
        <Button onClick={submitForm} color="primary">
          {actionText}
        </Button>
      </DialogActions>
    </Dialog>
  </form>
)};

export default LoginModalComponent