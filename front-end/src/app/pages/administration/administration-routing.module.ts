import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdministrationComponent } from "./administration.component";
import { TaskListComponent } from "./task-management/task-list/task-list.component";

const routes: Routes = [
    {
        path: "",
        component: AdministrationComponent,
        children: [
            {
                path: "task-management/task-list",
                component: TaskListComponent
            }
        ]
    }
];
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrationRoutingModule {}
