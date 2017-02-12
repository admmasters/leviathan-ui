// @flow
import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Defs } from 'react-native-svg';
import { Gradient } from '../Svg';
import type { Theme } from '../utils';

type Props = {
  height: number,
  width: number,
  arcHeight?: number,
  theme: Theme,
  children?: ReactElement<*>,
};

function makePath(width: number, height: number, arcHeight: number): string {
  const threeQuarterWidth = 0.75 * width;
  const halfWidth = 0.5 * width;
  const quarterWidth = 0.25 * width;

  const cellArcTop = height - arcHeight;
  const cellArcBottom = height;

  return `
    M0.000,-0.000
    L${width},-0.000
    L${width},${cellArcTop}
    C${width},${cellArcTop}
    ${threeQuarterWidth},${cellArcBottom}
    ${halfWidth},${cellArcBottom}
    C${quarterWidth},${cellArcBottom}
    0.000,${cellArcTop}
    0.000,${cellArcTop}
    L0.000,-0.000 Z
  `;
}

export default function ArcCell(
  { height, width, arcHeight = 8, theme, children }: Props,
) {
  const path = makePath(width, height, arcHeight);

  return (
    <Svg height={height} width={width}>
      <Defs>
        <Gradient
          id="backGrid"
          startColor={theme.arcStartColor}
          endColor={theme.arcEndColor}
        />
      </Defs>
      <Path d={path} fill="rgb(0,153,183)" />
      <Path d={path} fill="url(#backGrid)" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </View>
    </Svg>
  );
}
