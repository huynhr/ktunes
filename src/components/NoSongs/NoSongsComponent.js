import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import styles from './styles';

const NoSongsComponent = ({classes}) => (
  <React.Fragment>
      <Typography className={classes.message}>You do not have any songs downloaded.</Typography>
  </React.Fragment>
);

export default withStyles(styles)(NoSongsComponent);