import { LoaderService } from './services/loader/loader.service';
import { StringUtilService } from './services/utils/string-util.service';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NbAuthModule, NbDummyAuthStrategy } from "@nebular/auth";
import { NbSecurityModule, NbRoleProvider } from "@nebular/security";
import { of as observableOf } from "rxjs";
import { throwIfAlreadyLoaded } from "./module-import-guard";
import { LayoutService, StateService } from "./services";
import { LoggerService } from './services/logging/logger.service';
import { ObjectUtilService } from './services/utils/object-util.service';
import { CollectionUtilService } from './services/utils/collection-util.service';
import { WebSettingService } from './services/data-services/web-setting.service';
const socialLinks = [
    {
        url: "https://github.com/akveo/nebular",
        target: "_blank",
        icon: "github"
    },
    {
        url: "https://www.facebook.com/akveo/",
        target: "_blank",
        icon: "facebook"
    },
    {
        url: "https://twitter.com/akveo_inc",
        target: "_blank",
        icon: "twitter"
    }
];

const DATA_SERVICES = [
];

export class NbSimpleRoleProvider extends NbRoleProvider {
    getRole() {
        // here you could provide any role based on any auth flow
        return observableOf("guest");
    }
}

export const NB_CORE_PROVIDERS = [
    ...DATA_SERVICES,
    ...NbAuthModule.forRoot({
        strategies: [
            NbDummyAuthStrategy.setup({
                name: "email",
                delay: 3000
            })
        ],
        forms: {
            login: {
                socialLinks: socialLinks
            },
            register: {
                socialLinks: socialLinks
            }
        }
    }).providers,

    NbSecurityModule.forRoot({
        accessControl: {
            guest: {
                view: "*"
            },
            user: {
                parent: "guest",
                create: "*",
                edit: "*",
                remove: "*"
            }
        }
    }).providers,

    {
        provide: NbRoleProvider,
        useClass: NbSimpleRoleProvider
    },
    LayoutService,
    StateService,
    LoggerService,
    StringUtilService,
    ObjectUtilService,
    CollectionUtilService,
    LoaderService,
    WebSettingService
];

@NgModule({
    imports: [CommonModule],
    exports: [NbAuthModule],
    declarations: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, "CoreModule");
    }

    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: CoreModule,
            providers: [...NB_CORE_PROVIDERS]
        };
    }
}