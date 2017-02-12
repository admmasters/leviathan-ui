// @flow
export type TabConfig = {
  [key: string]: {
    screen: ReactClass<*>,
    path: string,
  },
};
