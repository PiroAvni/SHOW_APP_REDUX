const initialState = {
  shows: [],
  IsLoading: true,
  error: null,
  search: "Lost",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        shows: action.payload,
      };
    case "SEARCH_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
//     case "SET_SEARCH_QUERY":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     default:
//       return state;
   }
};

export default searchReducer;
