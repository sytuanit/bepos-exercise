import { Pipe, PipeTransform } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Pipe({
    name: "translateUpper",
    pure: false // impure pipe, update value when we change language
})
export class TranslateUpperPipe implements PipeTransform {
    /**
     *Creates an instance of TranslatePipe.
     * @param {TranslateService} _translate
     * @memberof TranslatePipe
     */
    constructor(private _translate: TranslateService) {}

    /**
     *Translation
     *
     * @param {string} value
     * @param {any[]} args
     * @returns {*}
     * @memberof TranslatePipe
     */
    transform(value: string, args: any[]): any {
        if (!value) {
            return;
        }
        return this._translate.instant(value, args).toUpperCase();
    }
}
