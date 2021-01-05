import { Component, Input } from "@angular/core";
import { LoaderService } from '../../../@core/services/loader/loader.service';
import { Subject } from 'rxjs';

@Component({
    selector: "ngx-loader",
    templateUrl: "./loader.component.html",
    styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent {
    isLoading: Subject<boolean>;

    /**
     *Creates an instance of LoaderComponent.
     * @param {LoaderService} loaderService
     * @memberof LoaderComponent
     */
    constructor(private loaderService: LoaderService){
        this.isLoading = this.loaderService.isLoading;
    }
}
