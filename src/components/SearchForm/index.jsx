import React, { useState } from 'react';
import { bindActionCreators } from "redux";
import * as actionCreators from '../../actions-creators/searchActions';
import { useSelector, useDispatch } from "react-redux";

const SearchForm = ({ handleSearch }) => {
 const [show, setShow] = useState('');

  const dispatch = useDispatch();
  const {setSearch, searchAPI} = bindActionCreators(actionCreators, dispatch)

  const search = useSelector((state) => state.shows.search)

  function handleInput(e) {
    dispatch(setSearch(e.target.value))
    //  dispatch(searchAPI)
    
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleSearch(show)
   setSearch('')
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
    >
      <label htmlFor="series">Series</label>
      <input
        type="text"
        id="series"
        onChange={handleInput}
        value={show}
        placeholder='What are you looking for?'
        required
      />
      <input type="submit" value="Search" />
     
    </form>
  );
}

export default SearchForm;