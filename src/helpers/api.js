import axios from 'axios';
import {xml2json} from 'xml-js';

import { formatSongs, handlesSignUpReturn, handlesDownload } from './formatData';

export function getSongs() {
  return axios.get(`https://kepler.space/frontend2019/${process.env.REACT_APP_API_KEY}/listSongs`)
    .then(response => {
      const result = xml2json(response.data, { compact: true });
      return formatSongs(JSON.parse(result).response.songs.song);
    })
    .catch(e => e);
}

export function signUp(params) {
  return axios.post(
    `https://kepler.space/frontend2019/${process.env.REACT_APP_API_KEY}/createUser?name=${params.name}&email=${params.email}&password=${params.password}`
  ).then(response => {
    const result = xml2json(response.data, { compact: true });
    return handlesSignUpReturn(JSON.parse(result).response)
  });
}

export function login(params) {
  return axios.post(
    `https://kepler.space/frontend2019/${process.env.REACT_APP_API_KEY}/listSongs?email=${params.email}&password=${params.password}`
  ).then(response => {
    const result = xml2json(response.data, { compact: true });
    return handlesSignUpReturn(JSON.parse(result).response)
  });
}

export function downloadSong(params) {
  return axios.post(
    `https://kepler.space/frontend2019/${process.env.REACT_APP_API_KEY}/getSong?email=${params.email}&password=${params.password}&songid=${params.songId}`
  ).then(response => {
    const result = xml2json(response.data, { compact: true });
    return handlesDownload(JSON.parse(result).response);
  });
}

