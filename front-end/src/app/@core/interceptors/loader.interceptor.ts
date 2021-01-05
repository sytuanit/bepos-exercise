import { HttpStatus } from "./../enums/http-status";
import { LoggerService } from "./../services/logging/logger.service";
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { LoaderService } from "../services/loader/loader.service";
import { Logger } from "../services/logging/logger";
import { TranslateService } from "@ngx-translate/core";
import { StringUtilService } from "../services/utils/string-util.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    logger: Logger;

    constructor(
        public loaderService: LoaderService,
        private loggerService: LoggerService,
        private translate: TranslateService,
        private stringUtil: StringUtilService
    ) {
        this.logger = this.loggerService.getLogger("Interceptor", "LoaderInterceptor");
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        let handler = next
            .handle(req)
            .pipe(
                tap(
                    next => {
                        // Nothing to implement
                    },
                    error => {
                        if (error instanceof HttpErrorResponse) {
                            switch (error.status) {
                                case HttpStatus.INTERNAL_SERVER_ERROR:
                                    this.logger.error(error.error.message);
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                )
            )
            .pipe(finalize(() => this.loaderService.hide()));
        return handler;
    }
}
