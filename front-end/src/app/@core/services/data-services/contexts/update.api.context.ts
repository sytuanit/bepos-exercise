import { BaseApiContext } from './base.api.context';

export class UpdateApiContext<T> extends BaseApiContext {
    id: number;
    data: T;

    constructor(inApiUrl: string, inId: number, inData: T) {
        super();
        this.apiUrl = inApiUrl;
        this.id = inId;
        this.data = inData;
    }
}
