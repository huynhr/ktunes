import React from 'react';
import {
  TextField
} from '@material-ui/core';

const SignUpFormComponent = ({
  user
}) => (
    <form>
      <TextField
        label="Name"
        value={user.name}
        margin="normal"
        fullWidth
      />
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

export default SignUpFormComponent;