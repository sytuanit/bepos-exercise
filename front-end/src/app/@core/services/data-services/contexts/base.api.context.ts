export class BaseApiContext {
    apiUrl: string;
    requestHeader: Map<string, string>;

    constructor() {
        this.requestHeader = new Map();
    }
}
