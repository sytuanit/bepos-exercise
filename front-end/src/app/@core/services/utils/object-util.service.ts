import { Injectable } from "@angular/core";

@Injectable()
export class ObjectUtilService {
    /**
     *Deep clone object
     *
     * @static
     * @param {*} obj
     * @returns {*}
     * @memberof ObjectUtil
     */
    deepClone(obj: any): any {
        return JSON.parse(JSON.stringify(obj));
    }

    /**
     * Determine 2 objects are equal
     *
     * @static
     * @param {*} obj1
     * @param {*} obj2
     * @returns
     * @memberof ObjectUtils
     */
    areObjectsEqual(obj1?: any, obj2?: any) {
        if (obj1 == null && obj2 == null) {
            return true;
        }
        if (obj1 == null && obj2 != null) {
            return false;
        }
        if (obj1 != null && obj2 == null) {
            return false;
        }
        let result = true;
        if (obj1 != null && obj2 != null) {
            result = JSON.stringify(obj1) === JSON.stringify(obj2);
        }
        return result;
    }
}
