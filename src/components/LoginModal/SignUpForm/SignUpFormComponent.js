import React from 'react';
import {
  TextField
} from '@material-ui/core';

const SignUpFormComponent = ({
  user,
  updateForm,
}) => (
    <React.Fragment>
      <TextField
        name='name'
        label="Name"
        value={user.name}
        margin="normal"
        fullWidth
        onChange={e => updateForm(e)}
      />
      <TextField
        name='email'
        label="Email"
        value={user.email}
        margin="normal"
        fullWidth
        onChange={e => updateForm(e)}
      />
      <TextField
        name='password'
        label="Password"
        value={user.password}
        margin="normal"
        fullWidth
        onChange={e => updateForm(e)}
        type='password'
      />
    </React.Fragment>
  )

export default SignUpFormComponent;