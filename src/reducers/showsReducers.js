const initialState = {
  shows: [],
  IsLoading: true,
  error: null,
};

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SHOWS_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "FETCH_SHOWS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        shows: action.payload,
      };
    case "FETCH_SHOWS_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default showsReducer;
