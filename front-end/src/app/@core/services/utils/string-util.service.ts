import * as Moment from "moment";
import { TransformMode } from "../../enums/transform-mode";
import { Injectable } from "@angular/core";

@Injectable()
export class StringUtilService {
    /**
     * Format string with arguments
     *
     * @static
     * @param {string} s
     * @param {...Array<any>} args
     * @returns {string}
     * @memberof StringUtils
     */
    format(s: string, ...args: Array<any>): string {
        return s.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != "undefined" ? args[number] : match;
        });
    }

    /**
     * Format date
     *
     * @static
     * @param {Date} d
     * @param {string} pattern
     * @returns {string}
     * @memberof StringUtils
     */
    formatDate(d: Date, pattern: string): string {
        return Moment(d).format(pattern);
    }

    /**
     *Format time
     *
     * @param {string} time
     * @returns {string}
     * @memberof StringUtilService
     */
    formatTime(time: string): string {
        let timeParts = time.split(":");
        return timeParts[0] + ":" + timeParts[1];
    }

    /**
     * Determine if a string is null or empty
     *
     * @static
     * @param {string} s
     * @returns {boolean}
     * @memberof StringUtils
     */
    isNullOrEmpty(s: string): boolean {
        return !s;
    }

    /**
     * Truncate a string with specified length
     *
     * @static
     * @param {string} s
     * @param {number} length
     * @returns {string}
     * @memberof StringUtils
     */
    truncate(s: string, length: number, separator: string): string {
        let result = s;
        if (s.length > length) {
            result = "...";
            s = s.substring(0, length);
            var lastPos = s.lastIndexOf(separator);
            if (lastPos != -1) {
                result = s.substring(0, lastPos) + "...";
            }
        }
        return result;
    }

    /**
     * Format a number with thousand and fixed separators
     * Ex: formatWithSeparators(100000.222, 4, ",", ".") => 100,000.2220
     *
     * @param {*} number
     * @param {*} numFixedDec
     * @param {*} decimalChar
     * @param {*} fixedChar
     * @returns
     */
    formatWithSeparators(
        number: number,
        numFixedDec: number = 0,
        decimalChar: string = ",",
        fixedChar: string = "."
    ): string {
        const fixedNumber = number.toFixed(numFixedDec).toString(); // Convert origin number to string with keeping specified decimals
        const parts = fixedNumber.split(".");
        const thousandPart = parseFloat(parts[0])
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, decimalChar);
        const result = parts.length == 1 ? thousandPart : thousandPart + fixedChar + parts[1];
        return result;
    }

    /**
     * Parse a number as string with thousand and fixed separators to numeric
     * Ex: parseNumberWithSeparators("100,000.222", 4, ",", ".") => 100000.222
     *
     * @param {*} numberStr
     * @param {*} numFixedDec
     * @param {*} decimalChar
     * @param {*} fixedChar
     * @returns
     */
    parseNumberWithSeparators(
        numberStr: string,
        numFixedDec: number = 0,
        decimalChar: string = ",",
        fixedChar: string = "."
    ) {
        var parts = numberStr.split(fixedChar);
        var thousandPartVal = parseFloat(parts[0].replace(decimalChar, ""));
        var result = 0;
        if (parts.length == 1) {
            result = thousandPartVal;
        } else {
            var fixedThousand = "1".padEnd(numFixedDec + 1, "0");
            var fixedPartVal = parseFloat(parts[1]) / parseFloat(fixedThousand);
            result = thousandPartVal + fixedPartVal;
        }
        return result;
    }

    /**
     * Encode URI
     *
     * @static
     * @param {string} url
     * @returns
     * @memberof StringUtils
     */
    encodeURI(url: string) {
        return encodeURIComponent(url);
    }

    /**
     *Transform text
     *
     * @static
     * @param {*} name
     * @param {*} textTransform
     * @returns
     * @memberof StringUtil
     */
    transform(name, textTransform) {
        let rawStr = name;
        switch (textTransform) {
            case TransformMode.UPPER_CASE:
                rawStr = rawStr.toUpperCase();
                break;
            case TransformMode.LOWER_CASE:
                rawStr = rawStr.toLowerCase();
                break;
            case TransformMode.CAPITALIZE:
                rawStr = rawStr.charAt(0).toUpperCase() + rawStr.slice(1);
                break;
            default:
                break;
        }
        return rawStr;
    }

    /**
     *Convert from string to time picker value
     *
     * @param {string} time
     * @returns
     * @memberof StringUtilService
     */
    toTimePickerValue(time: string) {
        if (!time) {
            return null;
        }
        let timeParts = time.split(":");
        let hours = parseInt(timeParts[0]);
        let minutes = parseInt(timeParts[1]);
        let seconds = 0;
        if (timeParts.length > 2) {
            seconds = parseInt(timeParts[2]);
        }
        let timeVal = { hour: hours, minute: minutes, second: seconds };
        return timeVal;
    }

    /**
     *To string as hh:mm:ss
     *
     * @param {*} timeVal
     * @returns
     * @memberof PurgeConfigurationComponent
     */
    toTimeString(timeVal: any) {
        if (!timeVal) {
            return "";
        }
        return `${timeVal.hour}:${timeVal.minute}:${timeVal.second}`;
    }
}
