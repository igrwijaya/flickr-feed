import {FlickrStatus} from "./flickr.constant";

export interface FlickrState {
    status: FlickrStatus,
    publicImages: FlickrImage[]
}

interface FlickrImage {
    imageUrl: string
    title: string
}
