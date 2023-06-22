import {colors} from '@constants/colors';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import {SharedValue} from 'react-native-reanimated';

interface Props {
  placeholder?: string;
  containerStyles?: StyleProp<ViewStyle>[];
  editable?: boolean;
  rightIcon?: React.ReactElement;
  inputValue?: SharedValue<string>;
}

export const Input = React.forwardRef<TextInput, Props>(({placeholder, containerStyles, editable = true, rightIcon, inputValue}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleChange = (text: string) => {
    setValue(text);
  };

  useEffect(() => {
    if (inputValue !== undefined) {
      inputValue.value = value;
    }
  }, [value]);

  return (
    <View style={[containerStyles, styles.container, isFocused ? styles.containerFocused : styles.containerUnFocused]}>
      <TextInput
        ref={ref}
        onChangeText={handleChange}
        editable={editable}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[styles.input]}
        placeholderTextColor={colors.gray[400]}
        placeholder={placeholder}
        value={value}
      />

      {rightIcon}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
  },
  containerFocused: {
    borderColor: colors.sky[700],
  },
  containerUnFocused: {
    borderColor: colors.gray[300],
  },
  input: {
    fontSize: 14.5,
    color: colors.gray[600],
    paddingHorizontal: 0,
    flex: 1,
  },
});
