import { BaseApiContext } from './base.api.context';

export class DetailApiContext extends BaseApiContext {
    requestQueryStr: string;

    constructor(inApiUrl: string, inRequestQueryStr: string = "") {
        super();
        this.apiUrl = inApiUrl;
        this.requestQueryStr = inRequestQueryStr;
    }
}
