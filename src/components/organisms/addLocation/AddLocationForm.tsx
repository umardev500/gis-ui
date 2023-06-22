import {AddressBtn, Button, Input, Loading} from '@components/atoms';
import {colors} from '@constants/colors';
import {OriginContext, OriginContextProp} from '@context/OriginContext';
import {MAPBOX_TOKEN} from '@env';
import {UploadData, useCreateCustomer, useUpload} from '@hooks/api';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {setAccessToken} from '@rnmapbox/maps';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, ToastAndroid, TouchableWithoutFeedback, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSharedValue} from 'react-native-reanimated';
import {Coords, CustomerPostProps, RootStackParamList} from 'src/types';
import {MapPinPoint} from '../maps';

setAccessToken(MAPBOX_TOKEN);

type StackProps = StackNavigationProp<RootStackParamList, 'AddLocationScreen'>;

export const AddLocationForm: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation<StackProps>();
  // upload data
  const [uploadData, setUploadData] = useState<UploadData>();
  // inputs value
  const nameValue = useSharedValue('');
  const phoneValue = useSharedValue('');
  // inputs ref
  const nameRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);

  // current map location
  const currentCoords = useSharedValue<Coords>({
    latitude: 0,
    longitude: 0,
  });

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

  // reset
  const resetForm = () => {
    nameRef.current?.clear();
    phoneRef.current?.clear();
    originContext.setCoords(undefined);
    originContext.setOrigin(undefined);
    setUploadData(undefined);
  };

  const handleSubmit = () => {
    const origin = originContext.origin;
    const coords = originContext.coords ?? currentCoords.value;
    const isFilledAll = nameValue.value !== '' && phoneValue.value !== '' && origin !== undefined && coords !== undefined && uploadData !== undefined;

    if (!isFilledAll) {
      ToastAndroid.show('Isi semua data', ToastAndroid.SHORT);

      return;
    }

    setIsSubmitting(true);

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
    postHandler(payload)
      .then(res => {
        ToastAndroid.show(res.message, ToastAndroid.SHORT);
        resetForm();
      })
      .catch(err => {
        ToastAndroid.show(err, ToastAndroid.SHORT);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // upload handler
  const uploadHandler = useUpload();

  const handlePickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, res => {
      const canceled = res.didCancel ?? false;

      if (!canceled) {
        // do upload
        setIsUploading(true);
        if (res.assets !== undefined) {
          uploadHandler(res.assets[0])
            .then(uploadResponse => {
              setUploadData(uploadResponse.data);
            })
            .catch(err => {
              console.log(err);
            })
            .finally(() => {
              setIsUploading(false);
            });
        }
      }
    });
  };

  const handleMapUpdate = (coords: any) => {
    currentCoords.value = {
      latitude: coords.latitude,
      longitude: coords.longitude,
    };
  };

  const uploadBtnText = uploadData !== undefined ? 'Ganti gambar' : 'Select picture';

  return (
    <View style={styles.container}>
      {isUploading || isSubmitting ? <Loading animating /> : null}
      <View style={styles.item}>
        <Text style={styles.label}>Nama Lokasi</Text>
        <Input ref={nameRef} inputValue={nameValue} placeholder="Masukan nama lokasi" />
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Nomor Telepon</Text>
        <Input ref={phoneRef} inputValue={phoneValue} placeholder="08***" />
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Alamat</Text>
        <AddressBtn />
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('PinPoint');
        }}>
        <View>
          <View pointerEvents="none" style={styles.mapContainer}>
            {!isLoading ? <MapPinPoint onUpdated={handleMapUpdate} /> : null}
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.pickerBtn}>
        <Button onPress={handlePickImage} text={uploadBtnText} colorText={colors.gray[600]} color={colors.red[50]} />
      </View>
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
    marginTop: 10,
  },
  pickerBtn: {
    marginTop: 40,
  },
});
