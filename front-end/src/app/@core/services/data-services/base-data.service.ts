import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { ListApiContext } from "./contexts/list.api.context";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { InsertApiContext } from "./contexts/insert.api.context";
import { UpdateApiContext } from "./contexts/update.api.context";
import { DeleteApiContext } from "./contexts/delete.api.context.";
import { DetailApiContext } from "./contexts/detail.api.context";
import { StringUtilService } from "../utils/string-util.service";
import { LoggerService } from "../logging/logger.service";
import { Logger } from "../logging/logger";
import { TranslateService } from "@ngx-translate/core";
import { ResultDTO } from "./models/result.dto";

export abstract class BaseDataService<T> {
    protected logger: Logger;

    constructor(
        protected loggerService: LoggerService,
        protected httpClient: HttpClient,
        protected translate: TranslateService,
        protected stringUtil: StringUtilService
    ) { }

    protected doGetListAsync(ctx: ListApiContext): Observable<ResultDTO<T>> {
        this.logger.debug(`doGetListAsync - apiUrl=[${ctx.apiUrl}]`);
        return this.httpClient
            .get<ResultDTO<T>>(ctx.apiUrl, {
                headers: this.buildDefaultHeader(),
                params: this.buildParams(ctx.requestQueryStr)
            })
            .pipe(catchError(this.handleError));
    }

    protected doGetAsync(ctx: DetailApiContext): Observable<T> {
        return this.httpClient
            .get<T>(ctx.apiUrl, {
                headers: this.buildDefaultHeader(),
                params: this.buildParams(ctx.requestQueryStr)
            })
            .pipe(catchError(this.handleError));
    }

    protected doInsertAsync(ctx: InsertApiContext<T>): Observable<T> {
        return this.httpClient
            .post<T>(ctx.apiUrl, ctx.data, {
                headers: this.buildDefaultHeader()
            })
            .pipe(catchError(this.handleError));
    }

    protected doUpdateAsync(ctx: UpdateApiContext<T>): Observable<T> {
        console.log(ctx);
        return this.httpClient
            .put<T>(ctx.apiUrl, ctx.data, {
                headers: this.buildDefaultHeader()
            })
            .pipe(catchError(this.handleError));
    }

    protected doDeleteAsync(ctx: DeleteApiContext): Observable<{}> {
        return this.httpClient
            .delete(ctx.apiUrl, {
                headers: this.buildDefaultHeader()
            })
            .pipe(catchError(this.handleError));
    }

    protected handleError(error: HttpErrorResponse) {
        console.log(error);
        return throwError(error);
    }

    protected buildParams(requestQueryStr: string) {
        if (this.stringUtil.isNullOrEmpty(requestQueryStr)) {
            return null;
        }
        let params = new HttpParams({
            fromString: requestQueryStr
        });
        return params;
    }

    protected buildDefaultHeader() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    }
}
