import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CalendarModule } from "primeng/calendar";
import { TableModule } from "primeng/table";
import { AccordionModule } from "primeng/accordion";
import { PaginatorModule } from "primeng/paginator";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { BlockUIModule } from "ng-block-ui";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {
    NbDatepickerModule,
    NbDialogModule,
    NbMenuModule,
    NbSidebarModule,
    NbToastrModule,
    NbWindowModule
} from "@nebular/theme";
import { ServiceModule } from "./shared/services/service.module";
import { LoaderService } from "./@core/services/loader/loader.service";
import { LoaderInterceptor } from "./@core/interceptors/loader.interceptor";
import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";
import "./@core/utils/extension-methods/array.extension";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "assets/i18n/lang-", ".json");
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        CalendarModule,
        TableModule,
        AccordionModule,
        PaginatorModule,
        NbSidebarModule.forRoot(),
        NbMenuModule.forRoot(),
        NbDatepickerModule.forRoot(),
        NbDialogModule.forRoot(),
        NgbModule,
        NbWindowModule.forRoot(),
        NbToastrModule.forRoot(),
        CoreModule.forRoot(),
        ThemeModule.forRoot(),
        ServiceModule.forRoot(),
        BlockUIModule.forRoot(),
        AppRoutingModule
    ],
    bootstrap: [AppComponent],
    providers: [
        LoaderService,
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
    ]
})
export class AppModule {}
