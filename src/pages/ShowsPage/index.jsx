import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ImageGallery } from "../../components";
import { bindActionCreators } from "redux";
import * as actionCreators from '../../actions-creators/showsActions';

const Shows = ({shows, isLoading}) => {
const dispatch = useDispatch();
const {fetchShows, fetchShowsSuccess} = bindActionCreators(actionCreators, dispatch)

const show = useSelector(state => state.show)


console.log(shows)
  // const [shows, setShows] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  // const [error, setError] = useState('')

  // async function fetchShows() {
  //   try {
  //     const response = await fetch("https://api.tvmaze.com/shows");
  //     const data = await response.json();
  //     setShows(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error.message);
  //     // setError(error)
  //   }
  // }

  useEffect(() => {
    fetchShows()
  }, [fetchShows]);


  console.log("shows Page:", shows);
  return (
    <>
      {isLoading ? <p>Loading...</p> : <ImageGallery shows={shows} />}
    </>
  );
};

export default Shows;
