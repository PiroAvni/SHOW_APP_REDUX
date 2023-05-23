
export const fetchShowsRequest = () => {
  return {
    type: "FETCH_SHOWS_REQUEST",
  };
};

export const fetchShowsSuccess = (shows) => {
  return {
    type: "FETCH_SHOWS_SUCCESS",
    payload: shows,
  };
};

export const fetchShowsFailure = (error) => {
  return {
    type: "FETCH_SHOWS_FAILURE",
    payload: error,
  };
};

export const fetchShows = () => {
  return async (dispatch) => {
    try {
       dispatch(fetchShowsRequest());
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();
      // console.log('actions:',data)
      dispatch(fetchShowsSuccess(data));
    } catch (error) {
      dispatch(fetchShowsFailure(error.message));
    }
  };
};
