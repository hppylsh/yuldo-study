const initialState = {
  seq: null,
  id: null,
  nickname: "lsh",
  isLogIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NICKNAME":
      return { ...state, nickname: action.data };
    default:
      return state;
  }
};

export default reducer;
