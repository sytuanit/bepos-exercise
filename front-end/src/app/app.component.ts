import { Component, OnInit } from "@angular/core";
import { LogContext } from "./@core/services/logging/log-context";
import { TranslateService } from "@ngx-translate/core";
import { WebSettingService } from "./@core/services/data-services/web-setting.service";

@Component({
    selector: "ngx-app",
    template: `
        <ngx-loader></ngx-loader>
        <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {
    /**
     *Creates an instance of AppComponent.
     * @param {AnalyticsService} analytics
     * @param {TranslateService} translate
     * @param {WebSettingService} webSettingService
     * @memberof AppComponent
     */
    constructor(
        private translate: TranslateService,
        private webSettingService: WebSettingService
    ) {
        this.translate.setDefaultLang("EN");
        this.webSettingService.loadWebSetting(webSetting => {
            LogContext.setLogLevel(webSetting.logLevel);
        });
    }

    /**
     * Called when component is initialized
     *
     * @memberof AppComponent
     */
    ngOnInit(): void {
    }
}
