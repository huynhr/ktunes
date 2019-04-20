import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import SongComponent from './Song/SongComponent';
import NoSongComponent from '..//NoSongs/NoSongsComponent';
import { DOWNLOADED_SONGS_TAB } from '../../helpers/constants';

const SongListComponent = ({
  songs,
  downloadedSongs,
  menu,
  classes,
  downloadSong,
  authenticated,
}) => {

  let currentSongList = [...songs];
  if (menu === DOWNLOADED_SONGS_TAB) {
    currentSongList = currentSongList.filter(song => downloadedSongs.indexOf(song.id) >= 0);
  }

  return (
    <React.Fragment>
      {
        currentSongList.length === 0
          ? <NoSongComponent />
          : <ul className={classes.list}>
            {currentSongList.map(song => (
              <li key={song.id} className={classes.item}>
                <SongComponent song={song} downloadSong={downloadSong} authenticated={authenticated} />
              </li>
            ))}
          </ul>
      }
    </React.Fragment>
)};

export default withStyles(styles)(SongListComponent)
