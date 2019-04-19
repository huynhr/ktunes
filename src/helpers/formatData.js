function getId(id) {
  let str = id.replace('↵', '');
  str = str.replace('↵', '');
  return str.trim();
}

export function getSongs(songs) {
  return songs.reduce((output, song) => {
    output.push({
      name: song['_attributes'].name,
      artist: song['_attributes'].artist,
      id: getId(song['_text'])
    })
    return output;
  }, []);
}