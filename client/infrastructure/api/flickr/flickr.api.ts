import BaseApi from "../base.api";

class FlickrApi extends BaseApi {
    constructor() {
        super('flickr');
    }

    fetchPublicImage(tags: string = ''): Promise<any> {
        const params = [];

        if(tags !== '') {
            params.push({
                tags: tags
            })
        }

        const url = this.generateUrl('fetch-image', params);

        return this.getRequest(url);
    }
}

const flickrApi = new FlickrApi()

export default flickrApi
