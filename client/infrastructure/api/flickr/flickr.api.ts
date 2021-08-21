import BaseApi from "../base.api";

class FlickrApi extends BaseApi {
    constructor() {
        super('flickr');
    }

    fetchPublicImage(): Promise<any> {
        const url = this.generateUrl('fetch-image');

        return this.getRequest(url);
    }
}

const flickrApi = new FlickrApi()

export default flickrApi
