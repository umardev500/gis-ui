import {colors} from '@constants/colors';
import * as React from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
}

export const ChevronRightIcon: React.FC<Props> = ({
  color = colors.gray[500],
  size = 24,
}) => (
  <View>
    <Svg
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      viewBox="0 0 24 24">
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </Svg>
  </View>
);
