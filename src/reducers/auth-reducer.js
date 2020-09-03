import produce from "immer";

const initialState = {
  token: null,
  status: "idle",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ACCESS_TOKEN":
      return produce(state, (draftState) => {
        draftState.status = "loading";
      });
    case "RECEIVE_ACCESS_TOKEN":
      return produce(state, (draftState) => {
        draftState.token = action.token;
        draftState.status = "idle";
      });
    case "RECEIVE_ACCESS_TOKEN_ERROR":
      return produce(state, (draftState) => {
        draftState.status = "error";
      });
    default: {
      return state;
    }
  }
}
