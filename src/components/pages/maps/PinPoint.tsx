import {Button, Loading} from '@components/atoms';
import {MapPinPoint} from '@components/organisms';
import {colors} from '@constants/colors';
import {OriginContext, OriginContextProp} from '@context/OriginContext';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {Coords, RootStackParamList} from 'src/types';

type StackProps = StackNavigationProp<RootStackParamList, 'AddLocationScreen'>;

export const PinPoint: React.FC = () => {
  const originContext = useContext(OriginContext) as OriginContextProp;
  const [coordinates, setCoordinates] = useState<Coords>();
  const [loading, setLoading] = useState(true);

  // navigation
  const navigation = useNavigation<StackProps>();

  const handleSelect = (coords: any) => {
    const latitude = coords[0];
    const longitude = coords[1];
    setCoordinates({
      latitude,
      longitude,
    });
  };

  const handleSubmit = () => {
    if (coordinates === undefined) {
      ToastAndroid.show('Silahkan pilih lokasi', ToastAndroid.SHORT);
      return;
    }
    originContext.setCoords(coordinates);

    navigation.goBack();
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <Loading animating /> : null}
      <MapPinPoint onSelected={handleSelect} />
      <View style={styles.btn}>
        <Button onPress={handleSubmit} text="Simpan" color={colors.sky[500]} />
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
