import {ChevronRightIcon} from '@components/atoms';
import {colors} from '@constants/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList, SettingMenu} from 'src/types';

interface Props extends SettingMenu {}
type StackProps = StackNavigationProp<RootStackParamList, 'AddLocationScreen'>;

export const SettingMenuListing: React.FC<Props> = ({title, screen, onPressCallback}) => {
  const navigation = useNavigation<StackProps>();
  const onPress = useCallback(() => {
    if (onPressCallback !== undefined) {
      onPressCallback();
      return;
    }
    navigation.navigate(screen);
  }, []);

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
