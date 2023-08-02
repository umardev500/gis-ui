import {colors} from '@constants/colors';
import React from 'react';
import {StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';

interface Props {
  color?: string;
  colorText?: string;
  text?: string;
  onPress?: () => void;
  loading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Button: React.FC<Props> = ({color = colors.red[500], colorText = 'white', text, loading = false, containerStyle, onPress}) => {
  text = loading ? 'Loading...' : text;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: color,
          },
          containerStyle,
        ]}>
        <Text
          style={[
            styles.text,
            {
              color: colorText,
            },
          ]}>
          {text ? text : 'Submit'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
});
