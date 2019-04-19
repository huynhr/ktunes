import axios from 'axios';
import {xml2json} from 'xml-js';

import { formatSongs } from './formatData';

export function getSongs() {
  return axios.get(`https://kepler.space/frontend2019/${process.env.REACT_APP_API_KEY}/listSongs`)
    .then(response => {
      const result = xml2json(response.data, { compact: true });
      return formatSongs(JSON.parse(result).response.songs.song);
    })
    .catch(e => e);
}