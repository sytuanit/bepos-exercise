import { Logger } from "./../@core/services/logging/logger";
import { Component, OnInit } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";
import { TranslateService } from "@ngx-translate/core";
import { LoggerService } from "../@core/services/logging/logger.service";

@Component({
    selector: "ngx-pages",
    styleUrls: ["pages.component.scss"],
    template: `
        <ngx-one-column-layout>
            <nb-menu [items]="menu"></nb-menu>
            <router-outlet></router-outlet>
        </ngx-one-column-layout>
    `
})
export class PagesComponent implements OnInit {
    logger: Logger;
    menu: NbMenuItem[];

    constructor(
        private translateService: TranslateService,
        protected loggerService: LoggerService
    ) {
        this.logger = this.loggerService.getLogger("PagesModule", "PagesComponent");
    }

    ngOnInit(): void {
        this.menu = this.createMenu();
        console.log(this.menu);
    }

    createMenu() {
        let menuDef = [
            {
                title: this.translateService.instant("common.word_task_management"),
                link: "./administration/task-management/task-list"
            }
        ];
        return menuDef;
    }
}
