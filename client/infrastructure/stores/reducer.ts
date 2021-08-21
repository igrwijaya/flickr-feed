import {combineReducers} from "redux";
import flickrReducer from "./flickr/flickr.reducer";

export const rootReducer = combineReducers({
    flickr: flickrReducer
});
