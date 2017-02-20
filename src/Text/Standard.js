// @flow
import React from 'react';
import BaseText from './Base';
import type { Props as BaseTextProps } from './Base';

type Props = BaseTextProps;

export default function StandardText(props: Props) {
  return <BaseText {...props} />;
}
