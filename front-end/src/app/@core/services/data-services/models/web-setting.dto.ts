import { LogLevel } from './../../logging/log-level';
export class WebSettingDTO {
    logLevel: number;
    useGateway: boolean;
    pageSize: number;

    constructor() {
        this.logLevel = LogLevel.WARN;
        this.useGateway = false;
    }
}
