// @flow
import React from 'react';
import { Text, Dimensions } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import { ArcCell, makeTheme } from '../../src';

const theme = makeTheme({
  tintColor: 'red',
  subTintColor: 'white',
  mainFontFamily: 'montserrat',
});

const { width } = Dimensions.get('window');

storiesOf('ArcCell', module)
  .add('Standard', () => (
    <ArcCell
      width={width}
      height={200}
      theme={theme}
    />
  ))
  .add('With Arc Height', () => (
    <ArcCell
      width={width}
      height={200}
      theme={theme}
      arcHeight={20}
    />
  ))
  .add('With Children', () => (
    <ArcCell
      width={width}
      height={200}
      theme={theme}
      arcHeight={20}
    >
      <Text>This is an example</Text>
    </ArcCell>
  ));
