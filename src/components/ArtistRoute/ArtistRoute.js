import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { fetchArtistProfile } from "../../helpers/api-helpers";
import {
  requestArtistProfile,
  receiveArtistProfile,
  receiveArtistProfileError,
} from "../../actions";

const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.auth.token);
  const artistId = useParams().id;
  const dispatch = useDispatch();

  const artist = useSelector((state) => state.artists.currentArtist.profile);

  const convertNumOfFollowers = (followers) => {
    const K = "K";
    const M = "M";
    const num = Number(followers);

    switch (true) {
      case num > 999 && num < 999999:
        return `${Math.round(num / 1000)}${K}`;
      case num > 999999:
        return `${Math.round(num / 1000000)}${M}`;
      default:
        return num;
    }
  };

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }
    try {
      dispatch(requestArtistProfile());
      let data = fetchArtistProfile(accessToken, artistId);
      data.then((result) => {
        console.log("result", result);
        dispatch(receiveArtistProfile(result));
      });
    } catch (error) {
      console.log(error);
      dispatch(receiveArtistProfileError(error));
    }
  }, [accessToken]);

  return !artist ? (
    <div>Loading...</div>
  ) : (
    <Wrapper>
      <h1>{artist.name}</h1>
      <img src={artist.images[0].url} alt="The Growlers" />
      <p>
        <span style={{ fontWeight: "bold" }}>Genres:</span> {artist.genres[0]},{" "}
        {artist.genres[1]}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Followers:</span>{" "}
        {convertNumOfFollowers(artist.followers.total)}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ArtistRoute;
