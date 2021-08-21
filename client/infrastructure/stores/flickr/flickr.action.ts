import * as types from "./flickr.types"
import flickrApi from "../../api/flickr/flickr.api";

export function fetchFlickrImage(tags: string = '') {
    return (dispatch: any, getState: any) => {
        dispatch({
            type: types.API_SEARCHING
        });

        flickrApi
            .fetchPublicImage(tags)
            .then((response: any) => {
                dispatch({
                    type: types.API_EXECUTED,
                    publicImages: response.data
                });
            })
            .catch(() => {
                dispatch({
                    type: types.API_EXECUTED,
                    publicImages: []
                });
            });
    };
}
