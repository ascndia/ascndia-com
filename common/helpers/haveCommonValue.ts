export function haveCommonValue<T>(array1:T[],array2:T[]){
    return array1.some(value => array2.includes(value))
}