import { BaseApiContext } from "./base.api.context";

export class ListApiContext extends BaseApiContext {
    requestQueryStr: string;

    constructor(inApiUrl: string, inRequestQueryStr: string = "") {
        super();
        this.apiUrl = inApiUrl;
        this.requestQueryStr = inRequestQueryStr;
    }
}
