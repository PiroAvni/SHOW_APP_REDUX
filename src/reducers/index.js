import { combineReducers } from "redux";
import showsReducer from "./showsReducers";
import searchReducer from "./searchReducer";

const allReducers = combineReducers({
  shows: showsReducer,
  search: searchReducer
});

export default allReducers;
