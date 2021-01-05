import { LoggerService } from "./../../../@core/services/logging/logger.service";
import { Component, forwardRef, ViewEncapsulation } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Logger } from "../../../@core/services/logging/logger";

const noop = () => {
};

export const TIME_PICKER_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimePickerComponent),
    multi: true
};

@Component({
    selector: "ngx-time-picker",
    templateUrl: "./time-picker.component.html",
    styleUrls: ["./time-picker.component.scss"],
    providers: [NgbTimepickerConfig, TIME_PICKER_CONTROL_VALUE_ACCESSOR],
    encapsulation: ViewEncapsulation.None,
})
export class TimePickerComponent implements ControlValueAccessor {
    logger: Logger;
    innerValue: any;

    private onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    /**
     *From ControlValueAccessor interface
     *
     * @param {*} value
     * @memberof TimePickerComponent
     */
    writeValue(value: any): void {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    /**
     *From ControlValueAccessor interface
     *
     * @param {*} fn
     * @memberof TimePickerComponent
     */
    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    /**
     *From ControlValueAccessor interface
     *
     * @param {*} fn
     * @memberof TimePickerComponent
     */
    registerOnTouched(fn: any): void {
    }

    /**
     *From ControlValueAccessor interface
     *
     * @param {boolean} isDisabled
     * @memberof TimePickerComponent
     */
    setDisabledState?(isDisabled: boolean): void {
        // Nothing to implement
    }

    ///////////////////////////// Implementation of ControlValueAccessor - END /////////////////////////////

    /**
     *Creates an instance of TimePickerComponent.
     * @param {TranslateService} translate
     * @param {LoggerService} loggerService
     * @param {NgbTimepickerConfig} timePickerConfig
     * @memberof TimePickerComponent
     */
    constructor(
        protected translate: TranslateService,
        protected loggerService: LoggerService,
        protected timePickerConfig: NgbTimepickerConfig,
    ) {
        this.logger = this.loggerService.getLogger("CoreComponents", "TimePicker");
        this.timePickerConfig.seconds = true;
        this.timePickerConfig.spinners = false;
    }
}
