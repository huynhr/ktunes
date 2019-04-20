export function getId(id) {
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
  // when the user is authenticated we get an error
  // when the user doesn't have any songs we do something else 
  if (res._attributes.success === 'false') {
    return {
      status: res._attributes.success,
      songs: [],
      message: res._text || '',
    }
  }
  let songs = res.songs.song;
  if (Array.isArray(songs)) {
    songs = res.songs.song ? res.songs.song.map(song => getId(song._text)) : [];
  } else {
    songs = [getId(songs._text)];
  }

  return {
    status: res._attributes.success,
    songs: songs,
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