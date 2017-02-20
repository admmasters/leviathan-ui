// @flow
import { StyleSheet } from 'react-native';

const _styles: Map<string, *> = new Map();

function _getStyle(name: string) {
  return _styles.get(name);
}

export function get(name: string): * {
  if (_styles.get(name)) {
    return _getStyle(name);
  }
  throw Error('Style does not exist');
}

export function cacheStyle<T>(name: string, styleItem: T): T {
  if (_styles.get(name)) {
    return ((_getStyle(name): any): T);
  }

  const styles = StyleSheet.create(styleItem);
  _styles.set(name, styles);
  return ((_getStyle(name): any): T);
}
