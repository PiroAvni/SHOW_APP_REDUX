import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { ImageGallery } from "../../components";


const Shows = () => {

  const isLoading = useSelector((state) => state.shows.loading);

  return (
    <>
      {isLoading ? <p>Loading...</p> : <ImageGallery  />}
    </>
  );
};

export default Shows;
