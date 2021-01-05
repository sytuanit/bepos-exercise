import { BaseApiContext } from './base.api.context';

export class DeleteApiContext extends BaseApiContext {
    id: number;

    constructor(inApiUrl: string, inId: number) {
        super();
        this.apiUrl = inApiUrl;
        this.id = inId;
    }
}
