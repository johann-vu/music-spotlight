const CLIENT_ID = ""
const REDIRECT_URI = "http://localhost:8080/callback"
const SCOPE = "user-read-private user-read-email"
const STATE_KEY = "spotify_auth_state"
const TOKEN_KEY = "spotify_auth_token"

export function StartLogin() {
  var state = generateRandomString(16);

  localStorage.setItem(STATE_KEY, state);

  var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(CLIENT_ID);
  url += "&scope=" + encodeURIComponent(SCOPE);
  url += "&redirect_uri=" + encodeURIComponent(REDIRECT_URI);
  url += "&state=" + encodeURIComponent(state);

  console.log(url);

  window.location = url;
}

export function EvaluateCallback() {
    var params = getHashParams()
    if (params.state != localStorage.getItem(STATE_KEY)) {
        return false
    }
    if (!params.access_token) {
        return false
    }
    localStorage.setItem(TOKEN_KEY, params.access_token);
    return true
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
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        console.log(q);
    while ( (e = r.exec(q))) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }