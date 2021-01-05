import { Logger } from "./../../@core/services/logging/logger";
import { WebSettingService } from "../../@core/services/data-services/web-setting.service";
import { Injectable } from "@angular/core";
import { LoggerService } from "../../@core/services/logging/logger.service";
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiUrlService {
    logger: Logger;
    USE_GATEWAY: boolean = true;

    constructor(private loggerService: LoggerService, private webSettingService: WebSettingService) {
        this.logger = this.loggerService.getLogger("API", "ApiUrlService");
        this.logger.debug("Ctor...");
        this.USE_GATEWAY = this.webSettingService.webSetting.useGateway;
        this.logger.info(`USE_GATEWAY=[${this.USE_GATEWAY}]`);
        this.logger.debug("Ctor...DONE");
    }

    get BASE_URL() {
        return environment.apiUrl;
    }

    get URLS() {
        return {
            CATEGORY_LIST: this.BASE_URL + "/categories",
            TASK_LIST: this.BASE_URL + "/tasks",
            TASK_DETAIL: this.BASE_URL + "/tasks/{0}",
            TASK_INSERT: this.BASE_URL + "/tasks",
            TASK_UPDATE: this.BASE_URL + "/tasks",
            TASK_DELETE: this.BASE_URL + "/tasks/{0}",
            STEP_LIST_BY_TASK: this.BASE_URL + "/tasks/{0}/steps"
        };
    }
}
