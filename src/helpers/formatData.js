function getId(id) {
  let str = id.replace('↵', '');
  str = str.replace('↵', '');
  return str.trim();
}

export function formatSongs(songs) {
  return songs.reduce((output, song) => {
    output.push({
      name: song['_attributes'].name,
      artist: song['_attributes'].artist,
      id: getId(song['_text'])
    })
    return output;
  }, []);
}

export function handlesSignUpReturn(res) {
  return {
    status: res._attributes.success,
    message: res._text
  }
}

export function handlesLoginReturn(res) {
  return {
    status: res._attributes.success,
    songs: res.songs,
    message: res._text || '',
  }
}

export function handlesDownload(res) {
  return {
    status: res._attributes.success,
    song: res.rawdata._text,
    encoding: res.rawdata._attributes.encoding
  }
}