import React,{useEffect} from 'react';

import { Link } from 'react-router-dom'

const ImageItem = ({ show }) => {
  
  return (
    <Link to={`${show.id}`}>
   {/* <Link to="/shows/:id"> */}
      <div className="gallery-image">
        <img src={show.image.medium} alt={show.name} />
      </div>
    </Link>
  );
}

export default ImageItem;