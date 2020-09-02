const initialState = {
  artists: null,
  status: "idle",
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
