import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {ShowCard, FilterSeries} from '..';

const ShowList = ({  ratingOrder, englishOnly, setRatingOrder, setEnglishOnly  }) => {

   const shows = useSelector((state) => state.shows.shows);
console.log('SHOWLIST:', shows)


  function compareRating(a, b) {
    if (!ratingOrder) {
        return 0;
    } else {
        const aVal = a.rating.average || 0;
        const bVal = b.rating.average || 0;
        return bVal - aVal;
    }
}

  function renderShows() {
    return shows
        .filter(s => s.summary && s.image ? true : false)
        .filter(s => (s.language == "English" || !englishOnly) ? true : false)
        .sort(compareRating)
        .map(s => <ShowCard key={s.id} show={s} />)
}

return <div className="show-list">
<FilterSeries
 ratingOrder={ratingOrder}
 englishOnly={englishOnly}
 setRatingOrder={setRatingOrder}
 setEnglishOnly={setEnglishOnly}
/>
{ renderShows() }
</div>
};

export default ShowList;