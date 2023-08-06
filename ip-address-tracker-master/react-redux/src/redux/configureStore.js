import { combineReducers, createStore } from "redux";
import geoLocationReducer from "./ducks/geoLocation";

const reducer = combineReducers({
  geoLocation: geoLocationReducer,
});

const store = createStore(reducer);

export default store;
