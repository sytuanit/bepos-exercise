import { Optional, SkipSelf, ModuleWithProviders, NgModule } from "@angular/core";
import { TaskDataService } from "./data-services/task.data-service";
import { throwIfAlreadyLoaded } from "../../@core/module-import-guard";
import { ApiUrlService } from '../constants/api-urls';

export const DATA_SERVICE_PROVIDERS = [
    TaskDataService,
    ApiUrlService
];

@NgModule({
    imports: [],
    exports: [],
    declarations: []
})
export class ServiceModule {
    /**
     *Creates an instance of ServiceModule.
     * @param {ServiceModule} parentModule
     * @memberof ServiceModule
     */
    constructor(@Optional() @SkipSelf() parentModule: ServiceModule) {
        throwIfAlreadyLoaded(parentModule, "ServiceModule");
    }

    /**
     *Register module and providers
     *
     * @static
     * @returns {ModuleWithProviders}
     * @memberof ServiceModule
     */
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: ServiceModule,
            providers: [...DATA_SERVICE_PROVIDERS]
        };
    }
}
