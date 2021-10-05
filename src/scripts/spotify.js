const SCOPE = "user-top-read";
const STATE_KEY = "spotify_auth_state";
const TOKEN_KEY = "spotify_auth_token";
const EXPIRY_TIMESTAMP = "spotify_expires_on"

export function StartLogin() {
  var state = generateRandomString(16);
  var client_id = process.env.VUE_APP_SPOTIFY_CLIENT_ID
  var redirect_uri = window.location.origin + process.env.VUE_APP_BASE_PATH + "callback"

  localStorage.setItem(STATE_KEY, state);

  var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(SCOPE);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  url += "&state=" + encodeURIComponent(state);
  url += "&show_dialog=true"

  window.location = url;
}

export function EvaluateCallback() {
  var params = getHashParams();
  if (params.state != localStorage.getItem(STATE_KEY)) {
    return false;
  }
  if (!params.access_token) {
    return false;
  }
  if (params.expires_in) {
    var expiry_timestamp = Date.now() + params.expires_in * 1000 * 0.8
    localStorage.setItem(EXPIRY_TIMESTAMP, expiry_timestamp)
  }
  localStorage.setItem(TOKEN_KEY, params.access_token);
  return true;
}

export function RemoveToken() {
  localStorage.removeItem(STATE_KEY)
  localStorage.removeItem(EXPIRY_TIMESTAMP)
  localStorage.removeItem(TOKEN_KEY)
}

export async function MakeSpotifyGETRequest(uri) {
  const myHeaders = new Headers();
  myHeaders.set("Authorization", "Bearer " + localStorage.getItem(TOKEN_KEY))

  const myRequest = new Request(uri, {
    method: "GET",
    headers: myHeaders,
  });

  const response = await fetch(myRequest);

  if (!response.ok) {
    return
  }
  
  return await response.json()
}

export function isTokenValid() {
  var timestamp = localStorage.getItem(EXPIRY_TIMESTAMP)
  if (!timestamp) {
    return
  }
  var parsed = parseInt(timestamp)
  if (parsed) {
    return Date.now() < parsed
  }
}

function generateRandomString(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  console.log(q);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}
