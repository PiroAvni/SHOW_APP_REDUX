import { combineReducers } from "redux";
import showsReducer from "./showsReducers";

const allReducers = combineReducers({
  shows: showsReducer,
});

export default allReducers;
