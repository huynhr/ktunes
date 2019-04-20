import React from 'react';
import { TextField } from '@material-ui/core';

import ErrorTextComponent from '../../ErrorText/ErrorTextComponent';

const LoginFormComponent = ({
  user,
  updateForm,
  loginErrorMsg,
}) => (
  <React.Fragment>
    <ErrorTextComponent text={loginErrorMsg !== '' && loginErrorMsg} />
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