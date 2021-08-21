import express, {NextFunction, Request, Response} from "express";
import {FlickrService} from "../services/flickr/flickr.service";

const router = express.Router();

router.get('/fetch-image', function(req: Request, res: Response, next: NextFunction) {
    const flickrService = new FlickrService();
    let tagsQuery: any = '';

    if(req.query.hasOwnProperty('tags')) {
        tagsQuery = req.query.tags;
    }

    flickrService.fetchPublicImage(tagsQuery)
        .then(response => {
            res.json({
                success: response.success,
                data: response.data
            })
        })
        .catch(response => {
            res.json({
                success: false,
                errorMessages: response.errorMessages
            })
        });
});

module.exports = router;
