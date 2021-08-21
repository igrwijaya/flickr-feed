import Axios from 'axios';

export default class BaseApi{
    baseApiUrl = process.env.NEXT_PUBLIC_FLICKR_FEED_API!;
    cancelToken = Axios.CancelToken;
    sourceRequest = this.cancelToken.source();
    httpHeader = {};

    constructor(route: string) {
        if (route !== '') {
            this.baseApiUrl += `/${route}`;
        }
    }

    //region Protected Methods

    protected getRequest(
        url: string,
        successCallback?: (params?: any) => void,
        failCallback?: (params?: any) => void,
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            Axios
                .get(url, {
                    headers: this.getHttpHeader(),
                    cancelToken: this.sourceRequest.token
                })
                .then(response => {
                    BaseApi.successResponseHandle(
                        response,
                        resolve,
                        reject,
                        successCallback,
                        failCallback,
                    );
                })
                .catch(error => {
                    BaseApi.failAjaxRequestHandle(reject, failCallback);
                });
        });
    }

    protected generateUrl(path: string, params?: {}[]): string {
        let url = this.baseApiUrl + '/' + path;

        if (params !== undefined) {
            params.map((item: any, index) => {
                const connector = index === 0 ? '?' : '&';

                url += connector + Object.keys(item)[0] + '=' + Object.values(item)[0];

                return true;
            });
        }

        return url;
    }

    //endregion

    //region Private Methods

    private getHttpHeader() {
        this.httpHeader = {
            'Content-Type': 'application/json'
        };

        return this.httpHeader;
    }

    private getFileHttpHeader() {
        this.httpHeader = {
            'Content-Type': 'multipart/form-data'
        };

        return this.httpHeader;
    }

    private static successResponseHandle(
        response: any,
        resolvePromise: (value?: unknown) => void,
        rejectPromise: (value?: unknown) => void,
        successCallback?: (params?: any) => void,
        failCallback?: (params?: any) => void,
    ) {
        if (response.data.success) {
            if (successCallback !== undefined) {
                successCallback(response.data);
            }

            resolvePromise(response.data);
        } else {
            if (failCallback !== undefined) {
                failCallback(response.data.errorMessages);
            }

            rejectPromise(response.data.errorMessages);
        }
    }

    private static failAjaxRequestHandle(
        rejectPromise: (value?: unknown) => void,
        failCallback?: (params?: any) => void,
    ) {
        const messages = [
            'Failed to send request, please close and open app again',
        ];

        if (failCallback !== undefined) {
            failCallback(messages);
        }

        rejectPromise(messages);
    }

    //endregion
}
