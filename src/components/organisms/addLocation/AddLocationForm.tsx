import {AddressBtn, Button, Input} from '@components/atoms';
import {colors} from '@constants/colors';
import {OriginContext, OriginContextProp} from '@context/OriginContext';
import {MAPBOX_TOKEN} from '@env';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {setAccessToken} from '@rnmapbox/maps';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, ToastAndroid, TouchableWithoutFeedback, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {CustomerPostProps, RootStackParamList} from 'src/types';
import {MapPinPoint} from '../maps';
import {useCreateCustomer} from '@hooks/api';

setAccessToken(MAPBOX_TOKEN);

type StackProps = StackNavigationProp<RootStackParamList, 'AddLocationScreen'>;

export const AddLocationForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation<StackProps>();
  // inputs ref
  const nameValue = useSharedValue('');
  const phoneValue = useSharedValue('');

  // context
  const originContext = useContext(OriginContext) as OriginContextProp;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  // post handler
  const postHandler = useCreateCustomer();

  const handleSubmit = () => {
    const origin = originContext.origin;
    const coords = originContext.coords;
    const isFilledAll = nameValue.value !== '' && phoneValue.value !== '' && origin !== undefined && coords !== undefined;

    if (!isFilledAll) {
      ToastAndroid.show('Isi semua data', ToastAndroid.SHORT);
      return;
    }

    const payload: CustomerPostProps = {
      name: nameValue.value,
      phone: phoneValue.value,
      province: {
        id: origin.province?.id ?? '0',
        name: origin.province?.name ?? '',
      },
      city: {
        id: origin.city?.id ?? '0',
        name: origin.city?.name ?? '',
        province_id: origin.province?.id ?? '0',
      },
      district: {
        id: origin.district?.id ?? '0',
        name: origin.district?.name ?? '',
        regency_id: origin.district?.regency_id ?? '0',
      },
      latitude: coords.latitude,
      longitude: coords.longitude,
      picture: 'pic',
      thumbnail: 'thumb',
      description: 'desc',
      createdAt: 16000,
    };
    postHandler(payload);
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>Nama Lokasi</Text>
        <Input inputValue={nameValue} placeholder="Masukan nama lokasi" />
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Nomor Telepon</Text>
        <Input inputValue={phoneValue} placeholder="08***" />
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Alamat</Text>
        <AddressBtn />
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('PinPoint');
        }}>
        <View style={styles.mapContainer}>{!isLoading ? <MapPinPoint /> : null}</View>
      </TouchableWithoutFeedback>

      <View style={styles.btnContainer}>
        <Button onPress={handleSubmit} text="Simpan" />
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
