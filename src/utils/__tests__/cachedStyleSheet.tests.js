// @flow
import 'react-native';
import { cacheStyle } from '../cachedStyleSheet';

// Tests
it('can get a cached style', () => {
  const style = cacheStyle('example', {
    flex: 1,
  });
  expect(style).toBeDefined();
});
