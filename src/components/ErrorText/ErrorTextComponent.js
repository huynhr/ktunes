import React from 'react';
import styles from './styles';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const ErrorTextComponent = ({classes, text}) => (
  <React.Fragment>
    <Typography color='error' className={classes.errorMessage}>{text}</Typography>
  </React.Fragment>
)

export default withStyles(styles)(ErrorTextComponent);