// @flow
import 'react-native';
import React from 'react';
import ArcCell from '../ArcCell';

import renderer from 'react-test-renderer';

const mockTheme = {
  arcStartColor: 'red',
  arcEndColor: 'blue',
  mainFontFamily: 'montserrat',
  subTintColor: 'white',
  tintColor: 'red',
};

// Mocks
jest.mock('react-native-svg');
jest.mock('../../Svg');

// Tests
it('renders correctly', () => {
  const tree = renderer.create(
    <ArcCell height={200} width={200} theme={mockTheme} arcHeight={80} />,
  );
  expect(tree).toMatchSnapshot();
});
