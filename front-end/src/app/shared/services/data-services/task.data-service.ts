import { BaseDataService } from "../../../@core/services/data-services/base-data.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ListApiContext } from "../../../@core/services/data-services/contexts/list.api.context";
import { ApiUrlService } from "../../constants/api-urls";
import { DetailApiContext } from "../../../@core/services/data-services/contexts/detail.api.context";
import { StringUtilService } from "../../../@core/services/utils/string-util.service";
import { InsertApiContext } from "../../../@core/services/data-services/contexts/insert.api.context";
import { UpdateApiContext } from "../../../@core/services/data-services/contexts/update.api.context";
import { DeleteApiContext } from "../../../@core/services/data-services/contexts/delete.api.context.";
import { HttpClient } from "@angular/common/http";
import { LoggerService } from "../../../@core/services/logging/logger.service";
import { TranslateService } from "@ngx-translate/core";
import { TaskDTO } from "../../models/task.dto";
import { ResultDTO } from "../../../@core/services/data-services/models/result.dto";

@Injectable()
export class TaskDataService extends BaseDataService<TaskDTO> {
    constructor(
        protected loggerService: LoggerService,
        protected httpClient: HttpClient,
        protected translate: TranslateService,
        protected stringUtil: StringUtilService,
        private API: ApiUrlService
    ) {
        super(loggerService, httpClient, translate, stringUtil);
        this.logger = this.loggerService.getLogger("DataService", "TaskDataService");
    }

    public getListAsync(): Observable<ResultDTO<TaskDTO>> {
        let ctx = new ListApiContext(this.API.URLS.TASK_LIST);
        return this.doGetListAsync(ctx);
    }

    public getAsync(id: number): Observable<TaskDTO> {
        let ctx = new DetailApiContext(this.stringUtil.format(this.API.URLS.TASK_DETAIL, id));
        return this.doGetAsync(ctx);
    }

    public insertAsync(newItem: TaskDTO): Observable<TaskDTO> {
        let ctx = new InsertApiContext(this.API.URLS.TASK_INSERT, newItem);
        return this.doInsertAsync(ctx);
    }

    public updateAsync(id: number, newItem: TaskDTO): Observable<TaskDTO> {
        let ctx = new UpdateApiContext(this.API.URLS.TASK_UPDATE, id, newItem);
        return this.doUpdateAsync(ctx);
    }

    public deleteAsync(id: number): Observable<{}> {
        let ctx = new DeleteApiContext(this.stringUtil.format(this.API.URLS.TASK_DELETE, id), id);
        return this.doDeleteAsync(ctx);
    }
}
