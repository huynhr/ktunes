import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import SongComponent from './Song/SongComponent'

const SongListComponent = ({
  songs,
  classes,
  downloadSong,
  authenticated,
}) => (
  <React.Fragment>
    <ul className={classes.list}>
      {songs.map(song => (
        <li key={song.id} className={classes.item}>
          <SongComponent song={song} downloadSong={downloadSong} authenticated={authenticated} />
        </li>
      ))}
    </ul>
  </React.Fragment>
);

export default withStyles(styles)(SongListComponent)
