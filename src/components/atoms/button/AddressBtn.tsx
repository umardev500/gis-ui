import {colors} from '@constants/colors';
import {OriginContext, OriginContextProp} from '@context/OriginContext';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useContext} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {RootStackParamList} from 'src/types';
import {ChevronRightIcon} from '../icons';

type StackProps = StackNavigationProp<RootStackParamList, 'OriginScreen'>;

export const AddressBtn: React.FC = () => {
  const navgiation = useNavigation<StackProps>();
  const handleClick = useCallback(() => {
    navgiation.navigate('OriginScreen');
  }, []);

  const originContext = useContext(OriginContext) as OriginContextProp;
  const origin = originContext.origin;

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={styles.container}>
        {origin !== undefined ? <Text style={[styles.text, styles.textOn]}>{`${origin.province?.name}, ${origin.city?.name}, ${origin.district?.name}`}</Text> : <Text style={styles.text}>Provinsi, Kota, Kecamatan, Kode Pos</Text>}
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
    color: colors.gray[400],
    flex: 1,
    paddingRight: 24,
    lineHeight: 22,
  },
  textOn: {
    color: colors.gray[600],
  },
});
