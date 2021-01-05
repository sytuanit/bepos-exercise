import { CollectionUtilService } from "../../../../@core/services/utils/collection-util.service";
import { AfterViewInit, Component } from "@angular/core";
import { LoggerService } from "../../../../@core/services/logging/logger.service";
import { TranslateService } from "@ngx-translate/core";
import { Logger } from "./../../../../@core/services/logging/logger";
import { TaskDTO } from "../../../../shared/models/task.dto";
import { TaskDataService } from "../../../../shared/services/data-services/task.data-service";

@Component({
    selector: "ngx-task-list",
    templateUrl: "./task-list.component.html",
    styleUrls: ["task-list.component.scss"],
})
export class TaskListComponent implements AfterViewInit {
    logger: Logger;
    todoItems: TaskDTO[];
    completedItems: TaskDTO[];

    constructor(
        protected translate: TranslateService,
        protected loggerService: LoggerService,
        protected collectionUtil: CollectionUtilService,
        private taskDataService: TaskDataService
    ) {
        this.logger = this.loggerService.getLogger("TaskManagement", "TaskListComponent");
    }

    ngAfterViewInit() {
        this.logger.info("ngAfterViewInit <- Enter");
        this.loadAllData();
        this.logger.info("ngAfterViewInit -> Leave");
    }

    loadAllData() {
        this.taskDataService.getListAsync().subscribe(result => {
            this.todoItems = result.items.filter(n => !n.hasCompleted);
            this.completedItems = result.items.filter(n => n.hasCompleted);
        });
    }

    /////////////////////////////////////// COMMANDS ///////////////////////////////////////

    markCompletedCommand(item: TaskDTO) {
        item.hasCompleted = true;
        this.taskDataService.updateAsync(item.id, item).subscribe(
            editedValue => {
                this.loadAllData()
            }
        );
    }

    markTodoCommand(item: TaskDTO) {
        item.hasCompleted = false;
        this.taskDataService.updateAsync(item.id, item).subscribe(
            editedValue => {
                this.loadAllData()
            }
        );
    }
}
