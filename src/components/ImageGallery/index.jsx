import React, {useEffect} from 'react';
// import ImageItem from '../ImageItem/index';
import { bindActionCreators } from "redux";
import * as actionCreators from '../../actions-creators/showsActions';
import { useSelector, useDispatch } from "react-redux";
import { ImageItem } from '..'

const ImageGallery = () => {
  const dispatch = useDispatch();
  const {fetchShows} = bindActionCreators(actionCreators, dispatch)
  
  const shows = useSelector((state) => state.shows.shows)

//  dispatch({type:"FETCH_SHOWS_SUCCESS", payload:shows})

console.log()

  useEffect(() => {
     dispatch(fetchShows)
    
  }, [dispatch]);

  console.log(shows)
  return (
    <div className="shows">
      {
        shows.map(show => <ImageItem key={show.id} show={show} />)
      }
    </div>
  );
}

export default ImageGallery;