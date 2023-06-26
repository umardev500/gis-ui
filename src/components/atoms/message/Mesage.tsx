import {colors} from '@constants/colors';
import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

interface Props {
  bg?: string;
  color?: string;
  containerStyle?: StyleProp<ViewStyle>;
  text?: string;
}

export const Message: React.FC<Props> = ({bg = colors.red[50], color = colors.gray[500], containerStyle, text}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bg,
        },
        containerStyle,
      ]}>
      <Text
        style={[
          styles.text,
          {
            color,
          },
        ]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  text: {},
});
