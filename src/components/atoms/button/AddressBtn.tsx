import {colors} from '@constants/colors';
import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {ChevronRightIcon} from '../icons';

export const AddressBtn: React.FC = () => {
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={styles.container}>
        <Text style={styles.text}>BANTEN, KAB. PANDEGLANG, PATIA, 42267</Text>
        <ChevronRightIcon color={colors.gray[400]} size={20} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.gray[300],
    minHeight: 55,
    paddingVertical: 16,
  },
  text: {
    fontSize: 14.5,
    color: colors.gray[600],
    flex: 1,
    paddingRight: 24,
    lineHeight: 22,
  },
});
