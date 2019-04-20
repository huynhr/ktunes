import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tabs,
  Tab,
} from '@material-ui/core';

import { LOGIN_TAB, SIGN_UP_TAB } from '../../helpers/constants';

const LoginModalComponent = ({
  open,
  openCloseModal,
  tab,
  switchTab
}) => {

  const actionText = tab === LOGIN_TAB ? 'Login' : 'Sign up';

  return (
  <div>
    <Dialog
      open={open}
      onClose={openCloseModal}
    >
      <Tabs value={tab}>
        <Tab label='Login' onClick={() => switchTab(LOGIN_TAB)} />
        <Tab label='Sign up' onClick={() => switchTab(SIGN_UP_TAB)} />
      </Tabs>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
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