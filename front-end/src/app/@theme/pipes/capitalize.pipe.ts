import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "capitalize" })
export class CapitalizePipe implements PipeTransform {
    /**
     *Transform a string to Capitalize case
     *
     * @param {string} input
     * @returns {string}
     * @memberof CapitalizePipe
     */
    transform(input: string): string {
        return input && input.length ? input.charAt(0).toUpperCase() + input.slice(1).toLowerCase() : input;
    }
}
