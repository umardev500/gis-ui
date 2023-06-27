import {Button} from '@components/atoms';
import {MapView} from '@components/organisms';
import {colors} from '@constants/colors';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ViewMap: React.FC = () => {
  return (
    <View style={styles.container}>
      <MapView />

      <View style={styles.detailButton}>
        <Button color={'white'} colorText={colors.gray[600]} text="Lihat Detail" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
});
