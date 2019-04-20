import React from 'react';
import {
  TextField
} from '@material-ui/core';

const LoginFormComponent = ({
  user,
}) => (
  <form>
    <TextField
      label="Email"
      value={user.email}
      margin="normal"
      fullWidth
    />
    <TextField
      label="Password"
      value={user.password}
      margin="normal"
      fullWidth
    />
  </form>
)

export default LoginFormComponent;