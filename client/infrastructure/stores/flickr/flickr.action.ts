import * as types from "./flickr.types"
import flickrApi from "../../api/flickr/flickr.api";

export function fetchFlickrImage() {
    return (dispatch: any, getState: any) => {
        dispatch({
            type: types.API_SEARCHING
        });

        flickrApi
            .fetchPublicImage()
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
