import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import SongComponent from './Song/SongComponent'

const SongListComponent = ({ songs, classes}) => (
  <React.Fragment>
    <ul className={classes.list}>
      {songs.map(song => (
        <li key={song.id} className={classes.item}>
          <SongComponent song={song} />
        </li>
      ))}
    </ul>
  </React.Fragment>
);

export default withStyles(styles)(SongListComponent)
