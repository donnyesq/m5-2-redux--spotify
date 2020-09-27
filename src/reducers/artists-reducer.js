import produce from "immer";

const initialState = {
  currentArtist: {},
  status: "idle",
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ARTIST_PROFILE":
      return produce(state, (draftState) => {
        draftState.status = "loading";
      });
    case "RECEIVE_ARTIST_PROFILE":
      return produce(state, (draftState) => {
        draftState.currentArtist.profile = action.artistData;
        draftState.status = "idle";
      });
    case "RECEIVE_ARTIST_PROFILE_ERROR":
      return produce(state, (draftState) => {
        draftState.status = "error";
        draftState.error = action.error;
      });
    default:
      return state;
  }
}
