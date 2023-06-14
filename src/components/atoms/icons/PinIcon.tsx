import {colors} from '@constants/colors';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  color?: string;
  width?: number;
  height?: number;
}

export const PinIcon: React.FC<Props> = ({
  color = colors.gray[500],
  width = 24,
  height = 24,
}) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    viewBox="0 0 24 24">
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z"
    />
  </Svg>
);
