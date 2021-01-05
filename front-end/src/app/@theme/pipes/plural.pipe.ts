import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "plural" })
export class PluralPipe implements PipeTransform {
    /**
     *Transform a string to plural case
     *
     * @param {number} input
     * @param {string} label
     * @param {string} [pluralLabel=""]
     * @returns {string}
     * @memberof PluralPipe
     */
    transform(input: number, label: string, pluralLabel: string = ""): string {
        input = input || 0;
        return input === 1 ? `${input} ${label}` : pluralLabel ? `${input} ${pluralLabel}` : `${input} ${label}s`;
    }
}
