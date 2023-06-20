import {AddressBtn, Input} from '@components/atoms';
import {colors} from '@constants/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const AddLocationForm: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>Nama Lokasi</Text>
        <Input placeholder="Masukan nama lokasi" />
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Nomor Telepon</Text>
        <Input placeholder="08***" />
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Alamat</Text>
        <AddressBtn />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  item: {
    marginBottom: 14,
  },
  label: {
    marginBottom: 8,
    color: colors.gray[500],
  },
});
