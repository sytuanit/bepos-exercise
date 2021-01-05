import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { ObjectUtilService } from "./object-util.service";

@Injectable()
export class CollectionUtilService {
    /**
     *Creates an instance of CollectionUtilService.
     * @param {ObjectUtilService} objectUtil
     * @memberof CollectionUtilService
     */
    constructor(private objectUtil: ObjectUtilService) {}

    /**
     * Determine if map is null or empty
     *
     * @static
     * @template K
     * @template V
     * @param {Map<K, V>} map
     * @returns {boolean}
     * @memberof CollectionUtils
     */
    isMapNullOrEmpty<K, V>(map?: Map<K, V>): boolean {
        if (!map) {
            return true;
        }
        return map.size == 0;
    }

    /**
     * Collect keys from map
     *
     * @static
     * @template K
     * @template V
     * @param {Map<K, V>} map
     * @returns {K[]}
     * @memberof CollectionUtils
     */
    collectKeys<K, V>(map?: Map<K, V>): K[] {
        if (!map) {
            return [];
        }
        let keys = [];
        for (const key in map) {
            keys.push(key);
        }
        return keys;
    }

    /**
     * Determine if array is null or empty
     *
     * @static
     * @template V
     * @param {Array<V>} array
     * @returns {boolean}
     * @memberof CollectionUtils
     */
    isNullOrEmpty<V>(array?: Array<V>): boolean {
        if (!array) {
            return true;
        }
        return array.length == 0;
    }

    /**
     * Convert map to query string
     *
     * @static
     * @param {Map<string, string>} map
     * @returns {string}
     * @memberof CollectionUtils
     */
    toQueryString(map: Map<string, string>): string {
        let str: string = "";
        if (this.isMapNullOrEmpty(map)) {
            return str;
        }
        let count = 0;
        for (var [key, value] of map.entries()) {
            count++;
            str += key + "=" + value;
            if (count < map.size) {
                str += "&";
            }
        }
        return str;
    }

    /**
     * Determine 2 arrays are equal
     *
     * @static
     * @template K
     * @template V
     * @param {Array<K>} arr1
     * @param {Array<V>} arr2
     * @returns {boolean}
     * @memberof CollectionUtils
     */
    areArraysEqual<K, V>(arr1?: Array<K>, arr2?: Array<V>): boolean {
        if (arr1 == null && arr2 == null) {
            return true;
        }
        if (arr1 == null && arr2 != null) {
            return false;
        }
        if (arr1 != null && arr2 == null) {
            return false;
        }
        let result = true;
        if (arr1 != null && arr2 != null) {
            if (arr1.length != arr2.length) {
                result = false;
                return result;
            }
            for (let i = 0; i < arr1.length; i++) {
                const item1 = arr1[i];
                const item2 = arr2[i];
                if (!this.objectUtil.areObjectsEqual(item1, item2)) {
                    result = false;
                    break;
                }
            }
        }
        return result;
    }
}
