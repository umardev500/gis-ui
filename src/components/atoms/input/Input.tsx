import {colors} from '@constants/colors';
import React, {useCallback, useState} from 'react';
import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';

interface Props {
  placeholder?: string;
  containerStyles?: StyleProp<ViewStyle>[];
  editable?: boolean;
  rightIcon?: React.ReactElement;
}

export const Input = React.forwardRef<TextInput, Props>(({placeholder, containerStyles, editable = true, rightIcon}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <View style={[containerStyles, styles.container, isFocused ? styles.containerFocused : styles.containerUnFocused]}>
      <TextInput ref={ref} editable={editable} onFocus={handleFocus} onBlur={handleBlur} style={[styles.input]} placeholderTextColor={colors.gray[400]} placeholder={placeholder} />

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
