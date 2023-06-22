import {ChevronRightIcon} from '@components/atoms';
import {colors} from '@constants/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const SelectedOrigin: React.FC = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.itemContainer,
          {
            marginTop: 18,
          },
        ]}>
        <View>
          <Text style={styles.label}>Lokasi Terpilih</Text>
        </View>
        <View
          style={[
            styles.item,
            {
              borderBottomWidth: 0.5,
              borderBottomColor: colors.gray[200],
            },
          ]}>
          <Text style={styles.text}>BANTEN</Text>
        </View>
        <View
          style={[
            styles.item,
            {
              borderBottomWidth: 0.5,
              borderBottomColor: colors.gray[200],
            },
          ]}>
          <Text style={styles.text}>PANDEGLANG</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.textActive}>Pilih Kecamatan</Text>
          <ChevronRightIcon size={18} color={colors.orange[600]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  label: {
    color: colors.gray[400],
    fontSize: 12,
    marginTop: 16,
    marginBottom: 8,
  },
  itemContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  item: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    justifyContent: 'space-between',
  },
  text: {
    color: colors.gray[600],
  },
  textActive: {
    color: colors.orange[600],
  },
});
