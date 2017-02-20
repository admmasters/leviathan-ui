// @flow
import React from 'react';
import { View } from 'react-native';

type Props = {
  color: 'red' | 'white',
  children?: string,
};

export default function BackgroundView(props: Props) {
  return (
    <View
      style={{
        backgroundColor: props.color,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {props.children}
    </View>
  );
}
