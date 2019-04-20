import React from 'react';
import {
  TextField,
  Typography,
} from '@material-ui/core';

const LoginFormComponent = ({
  user,
  updateForm,
  loginErrorMsg,
}) => (
  <React.Fragment>
    <Typography color='error'>{loginErrorMsg !== '' && loginErrorMsg}</Typography>
    <TextField
      name='email'
      label='Email'
      value={user.email}
      margin='normal'
      fullWidth
      onChange={e => updateForm(e)}
    />
    <TextField
      name='password'
      label='Password'
      value={user.password}
      margin='normal'
      fullWidth
      onChange={e => updateForm(e)}
      type='password'
    />
  </React.Fragment>
)

export default LoginFormComponent;