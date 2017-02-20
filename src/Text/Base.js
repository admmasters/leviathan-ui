// @flow
import React from 'react';
import styled from 'styled-components/native';
import { cacheStyle } from '../utils/cachedStyleSheet';

export type Props = {
  children?: string,
  fontFamily?: string,
  color: string,
  size: number,
  weight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900',
};

const StyledText = styled.Text`
  color: ${(props: Props) => props.color};
  fontSize: ${(props: Props) => props.size};
`;

export default function BaseText(props: Props) {
  const { children, ...other } = props;

  const styles = cacheStyle('standardFontFamily', {
    standardFont: {
      fontFamily: 'montserrat',
    },
  });
  return (
    <StyledText {...other} style={styles}>
      {children}
    </StyledText>
  );
}
