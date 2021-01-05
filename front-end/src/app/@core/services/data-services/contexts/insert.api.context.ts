import { BaseApiContext } from './base.api.context';

export class InsertApiContext<T> extends BaseApiContext {
    data: T;

    constructor(inApiUrl: string, inData: T) {
        super();
        this.apiUrl = inApiUrl;
        this.data = inData;
    }
}
