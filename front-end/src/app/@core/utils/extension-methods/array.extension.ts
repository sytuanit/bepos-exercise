interface Array<T> {
    pushArray<T>(this: T[], array: Array<T>);
}

/**
 *Push an array
 *
 * @template T
 * @param {T[]} this
 * @param {Array<T>} array
 */
function pushArray<T>(this: T[], array: Array<T>) {
    array.forEach(item => this.push(item));
}

Array.prototype.pushArray = pushArray;
