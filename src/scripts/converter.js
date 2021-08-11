export function ConvertArtists(artists) {
  var items = [];
  artists.forEach((artist) => {
    var newItem = {
      id: artist.id,
      title: artist.name,
      uri: artist.uri,
      subtitle: artist.genres.join(","),
    };
    items.push(newItem);
  });
  return items;
}

export function ConvertTracks(tracks) {
  var items = [];

  tracks.forEach((track) => {
    var artists = [];
    track.artists.forEach((artist) => {
      artists.push(artist.name);
    });

    var newItem = {
      id: track.id,
      title: track.name,
      uri: track.uri,
      subtitle: artists.join(","),
    };
    items.push(newItem);
  });
  return items;
}
