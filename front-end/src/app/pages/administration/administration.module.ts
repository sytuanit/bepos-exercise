import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { AdministrationComponent } from "./administration.component";
import { AdministrationRoutingModule } from "./administration-routing.module";
import { TaskListComponent } from "./task-management/task-list/task-list.component";

@NgModule({
    declarations: [
        TaskListComponent,
        AdministrationComponent,
    ],
    imports: [ThemeModule, AdministrationRoutingModule],
    exports: [],
    entryComponents: []
})
export class AdministrationModule {}
