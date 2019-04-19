import React, { Component } from 'react';
import axios from 'axios';
import { parseString } from 'xml2js';

import env from '../config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    }
  }

  componentDidMount() {
    axios.get(`https://kepler.space/frontend2019/${env.API_KEY}/listSongs`).then((response) => {
      parseString(response.data, (err, result) => {
        console.log('RESULT: ', result.response.songs[0]);
      })
      // this.setState({})
    })
  }

  render() {
    return (
      <div>Hello World!</div>
    )
  }
}

export default App;
