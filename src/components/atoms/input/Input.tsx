import {colors} from '@constants/colors';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle, View, ViewStyle} from 'react-native';
import {SharedValue} from 'react-native-reanimated';

interface Props extends TextInputProps {
  placeholder?: string;
  containerStyles?: StyleProp<ViewStyle>[];
  editable?: boolean;
  rightIcon?: React.ReactElement;
  inputValue?: SharedValue<string>;
  inputStyle?: StyleProp<TextStyle>;
}

export const Input = React.forwardRef<TextInput, Props>(({placeholder, containerStyles, editable = true, rightIcon, inputValue, inputStyle, ...props}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(inputValue?.value ?? '');

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
    <View style={[styles.container, isFocused ? styles.containerFocused : styles.containerUnFocused, containerStyles]}>
      <TextInput
        ref={ref}
        onChangeText={handleChange}
        editable={editable}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[styles.input, inputStyle]}
        placeholderTextColor={colors.gray[400]}
        placeholder={placeholder}
        value={value}
        {...props}
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
