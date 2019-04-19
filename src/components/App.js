import React, { Component } from 'react';
import axios from 'axios';
import {xml2json} from 'xml-js';
import { getSongs } from '../helpers/formatData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    }
  }

  componentDidMount() {
    axios.get(`https://kepler.space/frontend2019/${process.env.REACT_APP_API_KEY}/listSongs`).then((response) => {
      const result = xml2json(response.data, {compact: true});
      const songs = getSongs(JSON.parse(result).response.songs.song)

      this.setState({songs: songs});
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>k-tunes</h1>
        <ul>
          {this.state.songs.map( song => (
            <li key={song.id}>
              <h3>{song.name}</h3>
              <h4>{song.artist}</h4>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default App;
