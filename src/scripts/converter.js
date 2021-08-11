export function ConvertArtists(artists) {
  var items = [];
  artists.forEach((artist) => {
    var newItem = {
      id: artist.id,
      title: artist.name,
      url: artist.external_urls.spotify,
      subtitle: artist.genres.join(", "),
      imageURL: getImageURL(artist)
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
      url: track.external_urls.spotify,
      subtitle: artists.join(", "),
      imageURL: getImageURL(track.album)
    };
    items.push(newItem);
  });
  return items;
}

function getImageURL(item) {
    if (!item.images) {
        return ''
    }
    if (!item.images[0]) {
        return ''
    }
    return item.images[0].url
}