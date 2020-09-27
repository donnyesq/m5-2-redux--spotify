export const requestAccessToken = () => ({
  type: "REQUEST_ACCESS_TOKEN",
});

export const receiveAccessToken = (token) => ({
  type: "RECEIVE_ACCESS_TOKEN",
  token,
});

export const receiveAccessTokenError = () => ({
  type: "RECEIVE_ACCESS_TOKEN_ERROR",
});

export const requestArtistProfile = () => ({
  type: "REQUEST_ARTIST_PROFILE",
});

export const receiveArtistProfile = (artistData) => ({
  type: "RECEIVE_ARTIST_PROFILE",
  artistData,
});

export const receiveArtistProfileError = (error) => ({
  type: "RECEIVE_ARTIST_PROFILE_ERROR",
  error,
});
