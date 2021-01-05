import { TimePickerComponent } from "./components/time-picker/time-picker.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
    NbActionsModule,
    NbLayoutModule,
    NbMenuModule,
    NbSearchModule,
    NbSidebarModule,
    NbUserModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbThemeModule,
    NbCardModule,
    NbCheckboxModule,
    NbInputModule,
    NbSpinnerModule
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbSecurityModule } from "@nebular/security";

import { HeaderComponent } from "./components";
import {
    CapitalizePipe,
    PluralPipe,
    TranslatePipe
} from "./pipes";
import { OneColumnLayoutComponent, ThreeColumnsLayoutComponent, TwoColumnsLayoutComponent } from "./layouts";
import { DEFAULT_THEME } from "./styles/theme.default";
import { COSMIC_THEME } from "./styles/theme.cosmic";
import { CORPORATE_THEME } from "./styles/theme.corporate";
import { DARK_THEME } from "./styles/theme.dark";
import { MANULIFE_THEME } from "./styles/theme.manulife";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputSwitchModule } from "primeng/inputswitch";
import { SpinnerModule } from "primeng/spinner";
import { MultiSelectModule } from "primeng/multiselect";
import { DropdownModule } from "primeng/dropdown";
import { OrderListModule } from "primeng/orderlist";
import { ListboxModule } from "primeng/listbox";
import { TableModule } from "primeng/table";
import { CheckboxModule } from "primeng/checkbox";
import { TreeModule } from "primeng/tree";
import { NgSelectModule } from "@ng-select/ng-select";
import { TranslateUpperPipe } from "./pipes/translate-upper.pipe";
import { LoaderComponent } from "./components/loader/loader.component";

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule];

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

const NB_MODULES = [
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbSecurityModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
    NbCardModule,
    NbCheckboxModule,
    NbInputModule,
    NbSpinnerModule,
    NgbModule
];

const COMPONENTS = [
    HeaderComponent,
    OneColumnLayoutComponent,
    ThreeColumnsLayoutComponent,
    TwoColumnsLayoutComponent,
    LoaderComponent,
    TimePickerComponent
];

const PIPES = [
    CapitalizePipe,
    PluralPipe,
    TranslatePipe,
    TranslateUpperPipe
];

const DIRECTIVE = [];

const ENTRY_COMPONENTS = [];

const NB_THEME_PROVIDERS = [
    ...NbThemeModule.forRoot(
        {
            name: "manulife"
        },
        [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME, MANULIFE_THEME]
    ).providers
];

const CORE_PROVIDERS = [];

@NgModule({
    declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVE],
    imports: [...BASE_MODULES, ...NB_MODULES, ...PRIMENG_MODULES],
    exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES, ...DIRECTIVE, ...PRIMENG_MODULES],
    entryComponents: [...ENTRY_COMPONENTS]
})
export class ThemeModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: ThemeModule,
            providers: [...NB_THEME_PROVIDERS, ...CORE_PROVIDERS]
        };
    }
}
