// @flow
import React from 'react';
import ArcCell from '../ArcCell';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <ArcCell />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
