import { TranslateService } from "@ngx-translate/core";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { NbMenuService, NbSidebarService, NbThemeService } from "@nebular/theme";
import { LayoutService } from "../../../@core/services";
import { Subject } from "rxjs";
import { LoggerService } from "../../../@core/services/logging/logger.service";
import { Logger } from "../../../@core/services/logging/logger";
import { Base64Images } from "../../../../assets/base64-images";

@Component({
    selector: "ngx-header",
    styleUrls: ["./header.component.scss"],
    templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();
    userPictureOnly: boolean = false;
    defaultUserAvatar = Base64Images.DEFAULT_USER_AVATAR;
    logger: Logger;

    themes = [
        {
            value: "default",
            name: "Light"
        },
        {
            value: "dark",
            name: "Dark"
        },
        {
            value: "cosmic",
            name: "Cosmic"
        },
        {
            value: "corporate",
            name: "Corporate"
        },
        {
            value: "manulife",
            name: "Manulife"
        }
    ];

    currentTheme = "manulife";

    userMenu = [];

    /**
     * Creates an instance of HeaderComponent.
     * @param {NbSidebarService} sidebarService
     * @param {NbMenuService} menuService
     * @param {NbThemeService} themeService
     * @param {LayoutService} layoutService
     * @param {NbMediaBreakpointsService} breakpointService
     * @param {UaaService} uaaService
     * @param {WebSettingService} webSettingService
     * @memberof HeaderComponent
     */
    constructor(
        private sidebarService: NbSidebarService,
        private menuService: NbMenuService,
        private themeService: NbThemeService,
        private layoutService: LayoutService,
        private translate: TranslateService,
        private loggerService: LoggerService    ) {
        this.logger = this.loggerService.getLogger("CoreComponents", "Header");
    }

    /**
     * Called when component is created
     *
     * @memberof HeaderComponent
     */
    ngOnInit() {
        this.currentTheme = this.themeService.currentTheme;
    }

    /**
     * Called when component is destroyed
     *
     * @memberof HeaderComponent
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    /**
     * Change theme
     *
     * @param {string} themeName
     * @memberof HeaderComponent
     */
    changeTheme(themeName: string) {
        this.themeService.changeTheme(themeName);
    }

    /**
     * toggle sidebar
     *
     * @returns {boolean}
     * @memberof HeaderComponent
     */
    toggleSidebar(): boolean {
        this.sidebarService.toggle(true, "menu-sidebar");
        this.layoutService.changeLayoutSize();
        return false;
    }

    /**
     * Navigate home
     *
     * @returns
     * @memberof HeaderComponent
     */
    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
}
