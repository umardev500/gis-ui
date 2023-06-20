import {AddressBtn, Button, Input} from '@components/atoms';
import {colors} from '@constants/colors';
import {MAPBOX_TOKEN} from '@env';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {setAccessToken} from '@rnmapbox/maps';
import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {RootStackParamList} from 'src/types';
import {MapPinPoint} from '../maps';

setAccessToken(MAPBOX_TOKEN);

type StackProps = StackNavigationProp<RootStackParamList, 'AddLocationScreen'>;

export const AddLocationForm: React.FC = () => {
  const navigation = useNavigation<StackProps>();

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
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('PinPoint');
        }}>
        <View style={styles.mapContainer}>
          <MapPinPoint />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.btnContainer}>
        <Button text="Simpan" />
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
  mapContainer: {
    height: 200,
  },
  map: {
    flex: 1,
  },
  btnContainer: {
    marginTop: 40,
  },
});
