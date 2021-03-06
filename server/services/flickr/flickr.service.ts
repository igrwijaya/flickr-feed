import axios, {AxiosResponse} from "axios";
import {parseString} from "xml2js";
import {parse} from "node-html-parser";
import dotenv from "dotenv";
import {GenericDataResponse} from "../common/response/base.response";
import {FlickrImage} from "./dto/FlickrImage";

export class FlickrService {

    //region Constructors

    constructor() {
        dotenv.config();
    }

    //endregion

    //region Public Methods

    public fetchPublicImage(tags: string = ''): Promise<GenericDataResponse<FlickrImage[]>> {
        const self = this;
        return new Promise((resolve, reject) => {

            let url = process.env.FLICKR_API!;

            if(tags !== '') {
                url += "?tags=" + tags;
            }

            axios.get(url)
                .then(function (response) {
                    const imgList = FlickrService.populateFlickrImages(response);

                    resolve({
                        success: true,
                        data: imgList
                    });

                })
                .catch(function () {
                    reject({
                        success: false,
                        data: [],
                        errorMessages: ['Failed to fetch Flickr API']
                    });
                });
        });
    }

    //endregion

    //region Private Methods

    private static populateFlickrImages(response: AxiosResponse): FlickrImage[] {
        const imgList: FlickrImage[] = [];

        parseString(response.data, function (err, result) {

            for (const entryKey in result.feed.entry) {
                const entry = result.feed.entry[entryKey];

                imgList.push(...FlickrService.grabImageFromEntry(entry))
            }
        });

        return imgList;
    }

    private static grabImageFromEntry(entry: any) : FlickrImage[] {

        const imgList: FlickrImage[] = [];
        for (const contentKey in entry.content) {
            const domElement = parse(entry.content[contentKey]._);
            const img = domElement.querySelector('img');

            imgList.push({
                imageUrl: img.attrs.src,
                title: entry.title[0]
            });
        }

        return imgList;
    }

    //endregion
}
