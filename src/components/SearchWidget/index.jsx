import React, { useState, useEffect } from "react";
import { SearchForm, ShowList } from "../";

export default function SearchWidget() {
  const [ratingOrder, setRatingOrder] = useState(false);
  const [englishOnly, setEnglishOnly] = useState(false);

  const [showData, setShowData] = useState([]);
  const [search, setSearch] = useState("Married at First Sight");

  useEffect(() => {
    async function searchAPI() {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${search}`
      );
      const rawData = await response.json();
      const data = rawData.map((show) => show.show);
      setShowData(data);
    }

    searchAPI();
  }, [search]);

  function handleSearch(show) {
    setSearch(show);
  }

  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      {
        <ShowList
          showData={showData}
          ratingOrder={ratingOrder}
          englishOnly={englishOnly}
          setRatingOrder={setRatingOrder}
          setEnglishOnly={setEnglishOnly}
        />
      }
    </>
  );
}
