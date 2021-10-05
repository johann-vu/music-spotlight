# music-spotlight

[![Build Vue](https://github.com/johann-vu/music-spotlight/actions/workflows/main.yml/badge.svg)](https://github.com/johann-vu/music-spotlight/actions/workflows/main.yml)

## Getting started
1. Install the project's dependencies using `npm install`.
2. Use your Spotify account to log in to [Spotify for Developers](https://developer.spotify.com).
3. Create a new Project and configure `http://localhost:8080/callback` as a callback URI.
4. Copy the client ID from your apps overview.
2. Replace the value of `VUE_APP_SPOTIFY_CLIENT_ID` in the `.env` file with your own client ID.
3. Set the value of `VUE_APP_BASE_PATH` to `/` in the `.env` file.
4. Start the application by using `npm run serve`.

That's it, you should be ready to go!

Instead of editing the `.env` file, you can also create a `.env.local` file. This file will overwrite the values of the `.env` file. If you are using a different port or a custom base path, don't forget to adjust the callback URI accordingly.
