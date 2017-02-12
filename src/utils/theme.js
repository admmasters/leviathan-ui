// @flow
export type Theme =
  & ThemeRequired
  & {
    arcStartColor: string,
    arcEndColor: string,
  };

type ThemeRequired = {
  tintColor: string,
  subTintColor: string,
  mainFontFamily: string,
};

type ThemeOptionals = {
  arcStartColor?: string,
  arcEndColor?: string,
};

const defaults: ThemeOptionals = {
  arcStartColor: 'rgb(0,153,183)',
  arcEndColor: 'rgb(0,186,208)',
};

export function makeTheme(config: ThemeRequired & ThemeOptionals): Theme {
  return {
    ...defaults,
    ...config,
  };
}
