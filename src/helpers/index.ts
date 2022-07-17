import { FilterType } from "../engines/programs/types";

export const isEmptyObj = (obj) => {
    for (let i in obj) return false;
    return true;
}
export const isEmptyArray = (arr) => {
    for (let i in arr) return false;
    return true;
}

export function getApprovalCashBack(rate, amount):number {
    return (amount * rate * 0.6) / 100;
}

/** this function take value , and array of validators on that value, 
 * returns array of errors or empty array if no error 
 * ... validator should return either error message or false if no error
 * */

export const checkForErrors = (value, validators) => {
    const errors = []
    validators.forEach(validator => {
        const error = validator(value);
        error && errors.push(error)
    });
    return errors;
}
export function thereIsError(value, validators) {
    return !isEmptyArray(checkForErrors(value, validators))
}

export function NoError(errors_obj) {
    if (typeof (errors_obj) != 'object') return false;
    const errors = Object.values(errors_obj).filter(err => err != 0)
    return isEmptyArray(errors)
}
export function getTodayPlusX(x) {
    const nextDate = new Date(new Date().getTime() + (x * 24 * 60 * 60 * 1000)).toDateString();
    return nextDate
}

export function ArrayToMatrix(arr, cols) {
    let matrix = [], i, k;
    for (i = 0, k = -1; i < arr.length; i++) {
        if (i % cols === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(arr[i]);
    }
    return matrix;
}
export function delay(delayInms) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, delayInms);
    });
}
export function FillObject(obj1,obj2):any{
    Object.keys(obj2).filter(key => key in obj1).forEach(key => obj1[key] = obj2[key]);
    return obj1
}
export function parseURLQuery(query):any {
    const parsed = {}
    for (const [key, value] of Object.entries<any>(query)) {
        if (value === "false") {
            parsed[key] = false
            continue
        }
        if (value === "true") {
            parsed[key] = true
            continue
        }
        if (isNaN(value)) {
            parsed[key] = value
            continue
        }
        if (!isNaN(value)) {
            parsed[key] = parseInt(value)
            continue
        }


    }
    return parsed
}