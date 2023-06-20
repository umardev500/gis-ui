import {Button} from '@components/atoms';
import {MapPinPoint} from '@components/organisms';
import {colors} from '@constants/colors';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PinPoint: React.FC = () => {
  return (
    <View style={styles.container}>
      <MapPinPoint />
      <View style={styles.btn}>
        <Button text="Simpan" color={colors.sky[500]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  btn: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
});
