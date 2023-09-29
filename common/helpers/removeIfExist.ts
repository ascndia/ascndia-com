export function removeIfExist<T>(array:T[],value:T){
    return array.filter(item => item !== value)
}