import _ from 'lodash';

export function haveCommonValue<T extends { [key: string]: any }>(array1: T[], array2: T[], key: keyof T): boolean {
  const hasCommonValue = !_.isEmpty(_.intersectionBy(array1, array2, key));
  return hasCommonValue;
}
