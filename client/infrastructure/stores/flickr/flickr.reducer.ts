import * as types from './flickr.types';
import {FlickrStatus} from "./flickr.constant";

const initialState = {
    status: FlickrStatus,
    publicImages: []
}

const flickrReducer = (state = initialState, action: any = {}) => {
    switch (action.type) {
        case types.API_EXECUTED:
            return {
                ...state,
                publicImages: action.publicImages,
                status: FlickrStatus.ready
            }
        case types.API_SEARCHING:
            return {
                ...state,
                publicImages: [],
                status: FlickrStatus.searching
            }
        default:
            return state
    }
}

export default flickrReducer
