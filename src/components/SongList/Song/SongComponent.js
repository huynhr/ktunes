import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid, Button } from '@material-ui/core';

import styles from './styles';

const SongComponent = ({ song, classes, downloadSong, authenticated }) => (
  <React.Fragment>
    <Paper className={classes.paperItem}>
      <Grid container justify='space-between'>
        <Grid item xs={5}>
          <Grid container alignItems='center'>
            <Grid item>
              <Typography variant='subtitle1'>{song.name}</Typography>
            </Grid>
            <Grid item>
              <Typography> - </Typography>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1'>{song.artist}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <Grid container justify='flex-end'>
            <Grid item>
              <Button
                variant='contained'
                color='primary'
                onClick={() => downloadSong(song.id)}
                disabled={authenticated === false}
              >
                Download
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </React.Fragment>
);

export default withStyles(styles)(SongComponent)
