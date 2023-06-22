import {ChevronRightIcon} from '@components/atoms';
import {colors} from '@constants/colors';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SettingMenu} from 'src/types';

interface Props extends SettingMenu {
  onPress?: () => void;
}

export const SettingMenuListing: React.FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <ChevronRightIcon size={18} color={colors.gray[400]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: colors.gray[600],
  },
});
