import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { InputSwitchModule } from "primeng/inputswitch";
import { SpinnerModule } from "primeng/spinner";
import { MultiSelectModule } from "primeng/multiselect";
import { DropdownModule } from "primeng/dropdown";
import { OrderListModule } from "primeng/orderlist";
import { ListboxModule } from "primeng/listbox";
import { TableModule } from "primeng/table";
import { CheckboxModule } from "primeng/checkbox";
import { TreeModule } from "primeng/tree";
import { AdministrationModule } from "./administration/administration.module";

const PRIMENG_MODULES = [
    InputSwitchModule,
    SpinnerModule,
    MultiSelectModule,
    DropdownModule,
    OrderListModule,
    ListboxModule,
    TableModule,
    CheckboxModule,
    TreeModule
];

@NgModule({
    imports: [
        ...PRIMENG_MODULES,
        PagesRoutingModule,
        ThemeModule,
        NbMenuModule,
        AdministrationModule
    ],
    declarations: [PagesComponent]
})
export class PagesModule {}
