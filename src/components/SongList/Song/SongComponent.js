import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid, Button } from '@material-ui/core';

import styles from './styles';

const SongComponent = ({ song, classes }) => (
  <React.Fragment>
    <Paper className={classes.paperItem}>
      <Grid container justify='space-between'>
        <Grid item xs={3}>
          <Grid container alignItems='center'>
            <Grid item={2}>
              <Typography variant='subtitle1'>{song.name}</Typography>
            </Grid>
            <Grid item>
              <Typography> - </Typography>
            </Grid>
            <Grid item={2}>
              <Typography variant='subtitle1'>{song.artist}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid container justify='flex-end'>
            <Grid item>
              <Button variant='contained' color='primary'>Download</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </React.Fragment>
);

export default withStyles(styles)(SongComponent)
