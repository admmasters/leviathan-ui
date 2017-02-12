// @flow
import React from 'react';
import { LinearGradient, Stop } from 'react-native-svg';

type Props = {
  startColor: string,
  endColor: string,
  id?: string,
  startStopOpacity?: string,
  endStopOpacity?: string,
};

export default function Gradient(
  {
    id,
    startColor,
    endColor,
    startStopOpacity = '1',
    endStopOpacity = '1',
  }: Props,
) {
  return (
    <LinearGradient id={id} x1="0%" x2="0%" y1="0%" y2="100%">
      <Stop offset="0%" stopColor={startColor} stopOpacity={startStopOpacity} />
      <Stop offset="100%" stopColor={endColor} stopOpacity={endStopOpacity} />
    </LinearGradient>
  );
}
