import axios from "axios";

export const fetchSearchRequest = () => {
  return {
    type: "SEARCH_REQUEST",
  };
};

export const fetchSearchSuccess = (shows) => {
  return {
    type: "SEARCH_SUCCESS",
    payload: shows,
  };
};

export const fetchSearchFailure = (error) => {
  return {
    type: "FILTER_FAILURE",
    payload: error,
  };
};
// export const setSearchQuery = (search) => {
//   return {
//     type: "SET_SEARCH_QUERY",
//     payload: search,
//   };
// };

export const searchAPI = (search) => {
  return async (dispatch) => {
    // const {search}=getState().shows;
    dispatch(fetchSearchRequest());
    axios
      .get(` https://api.tvmaze.com/search/shows?q=${search}`)
      .then((response) => {
        const shows = response.Json()
        console.log('SHOWS 37:',shows)
        dispatch(fetchSearchSuccess(shows));
      })
      .catch((error) => {
        dispatch(fetchSearchFailure(error.message));
      });
  };
};
