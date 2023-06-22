import {colors} from '@constants/colors';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  color?: string;
  colorText?: string;
  text?: string;
  onPress?: () => void;
}

export const Button: React.FC<Props> = ({color = colors.red[500], colorText = 'white', text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: color,
          },
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
