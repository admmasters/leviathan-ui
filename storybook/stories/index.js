// @flow
import React from 'react';
import { Text, Dimensions } from 'react-native';
import { storiesOf } from '@kadira/react-native-storybook';
import BackgroundView from '../helpers/BackgroundView';

import { ArcCell, StandardText, makeTheme } from '../../src';

const theme = makeTheme({
  tintColor: 'red',
  subTintColor: 'white',
  mainFontFamily: 'montserrat',
});

const { width } = Dimensions.get('window');

storiesOf('ArcCell', module)
  .add('Standard', () => <ArcCell width={width} height={200} theme={theme} />)
  .add('With Arc Height', () => (
    <ArcCell width={width} height={200} theme={theme} arcHeight={20} />
  ))
  .add('With Children', () => (
    <ArcCell width={width} height={200} theme={theme} arcHeight={20}>
      <Text>This is an example</Text>
    </ArcCell>
  ));

storiesOf('Text', module).add('Standard', () => (
  <BackgroundView color="red">
    <StandardText color="white" weight="400" size={20}>
      This is StandardText Edited
    </StandardText>
  </BackgroundView>
));
