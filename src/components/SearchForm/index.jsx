import React, { useState } from 'react';


const SearchForm = ({ handleSearch }) => {
  const [show, setShow] = useState('');

  function handleInput(e) {
    setShow(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleSearch(show)
    setShow('')
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