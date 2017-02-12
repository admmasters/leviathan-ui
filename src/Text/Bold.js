//@flow
import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import type { Theme } from '../utils';

type ThemeMixed = { [key: string]: mixed };

type Props = {
  children?: string,
  theme: Theme,
};

const StyledText = styled.Text`
  color: ${(props: Props) => props.theme.subTintColor};
  fontFamily: ${(props: Props) => props.theme.mainFontFamily}
`;

export default function BoldText({ children, theme }: Props) {
  return (
    <ThemeProvider theme={((theme: any): ThemeMixed)}>
      <StyledText>
        {children}
      </StyledText>
    </ThemeProvider>
  );
}
