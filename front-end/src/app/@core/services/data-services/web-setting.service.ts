import { WebSettingDTO } from "./models/web-setting.dto";
import { LoggerService } from "../logging/logger.service";
import { BaseDataService } from "./base-data.service";
import { Injectable } from "@angular/core";
import { StringUtilService } from "../utils/string-util.service";
import { HttpClient } from "@angular/common/http";
import { TranslateService } from "@ngx-translate/core";
import { DetailApiContext } from "./contexts/detail.api.context";
import { LogLevel } from "../logging/log-level";

@Injectable()
export class WebSettingService extends BaseDataService<WebSettingDTO> {
    webSetting: WebSettingDTO = new WebSettingDTO();

    constructor(
        protected loggerService: LoggerService,
        protected httpClient: HttpClient,
        protected translate: TranslateService,
        protected stringUtil: StringUtilService
    ) {
        super(loggerService, httpClient, translate, stringUtil);
        this.logger = this.loggerService.getLogger("DataService", "ClientSettingService");
    }

    loadWebSetting(onLoadingCompleted: (webSetting: WebSettingDTO) => void) {
        const ctx = new DetailApiContext("/web-settings");
        this.doGetAsync(ctx).subscribe(
            value => {
                this.webSetting = value;
                this.logger.info(`webSetting=[${JSON.stringify(this.webSetting)}]`);
                if (onLoadingCompleted != null) {
                    onLoadingCompleted(this.webSetting);
                }
            },
            error => {
                this.webSetting = {
                    logLevel: LogLevel.DEBUG,
                    useGateway: false,
                    pageSize: 20 // Default for local dev
                };
                this.logger.warn(
                    `Cannot get web setting: [${JSON.stringify(error)}], use default=[${JSON.stringify(
                        this.webSetting
                    )}]`
                );
                if (onLoadingCompleted != null) {
                    onLoadingCompleted(this.webSetting);
                }
            }
        );
    }
}
