import React, { useState, useEffect } from "react";

import { bindActionCreators } from "redux";
import * as actionCreators from '../../actions-creators/searchActions';
import { useSelector, useDispatch } from "react-redux";


import { SearchForm, ShowList } from "../";

export default function SearchWidget() {
  // const [ratingOrder, setRatingOrder] = useState(false);
  // const [englishOnly, setEnglishOnly] = useState(false);


  const dispatch = useDispatch();
  const {searchAPI, setSearchQuery} = bindActionCreators(actionCreators, dispatch)

   const shows = useSelector((state) => state.search.search);
  const search = useSelector((state) => state.search.search)

  dispatch({type:"SET_SEARCH_QUERY", payload:search})

console.log(search)
// console.log(shows)

useEffect(() => {
  dispatch(searchAPI);
 
}, [dispatch]);

  // const [showData, setShowData] = useState([]);
  // const [search, setSearch] = useState("Married at First Sight");

  // useEffect(() => {
  //   async function searchAPI() {
  //     const response = await fetch(
  //       `https://api.tvmaze.com/search/shows?q=${search}`
  //     );
  //     const rawData = await response.json();
  //     const data = rawData.map((show) => show.show);
  //     setShowData(data);
  //   }

  //   searchAPI();
  // }, [search]);

  // function handleSearch(show) {
  //   setSearch(show);
  // }

  function handleSearch(search) {
    setSearchQuery(search)
    dispatch(searchAPI);
    console.log(search)
  }
console.log('SEARCH:', search)

  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      {
        <ShowList
           shows={shows}
          // ratingOrder={ratingOrder}
          // englishOnly={englishOnly}
          // setRatingOrder={setRatingOrder}
          // setEnglishOnly={setEnglishOnly}
        />
      }
    </>
  );
}
