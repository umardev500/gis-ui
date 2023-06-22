import district from '@assets/geo/districts.json';
import province from '@assets/geo/provinces.json';
import city from '@assets/geo/regencies.json';
import {Button} from '@components/atoms';
import {OriginList, SelectedOrigin} from '@components/organisms';
import {OriginContext, OriginContextProp} from '@context/OriginContext';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {OriginBasic, OriginCity, OriginDistrict, RootStackParamList} from 'src/types';

type StackProps = StackNavigationProp<RootStackParamList, 'AddLocationScreen'>;

export const Origin: React.FC = () => {
  const [provinces] = useState<OriginBasic[]>(province);
  const [regencies, setRegencies] = useState<OriginCity[]>([]);
  const [districts, setDistricts] = useState<OriginDistrict[]>([]);

  const [selectedProvince, setSelectedProvince] = useState<OriginBasic | null>(null);
  const [selectedRegency, setSelectedRegency] = useState<OriginCity | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<OriginDistrict | null>(null);
  const hasFilledAll = selectedProvince !== null && selectedRegency !== null && selectedDistrict !== null;

  // context
  const originContext = useContext(OriginContext) as OriginContextProp;
  // navigation
  const navigation = useNavigation<StackProps>();

  // watch province select
  useEffect(() => {
    if (selectedProvince !== null) {
      const filteredCities = city.filter(val => val.province_id === selectedProvince.id);
      setRegencies(filteredCities);
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedRegency !== null) {
      const districtFiltered = district.filter(val => val.regency_id === selectedRegency.id);
      setDistricts(districtFiltered);
    }
  }, [selectedRegency]);

  const handleSelectOrigin = (originSelected?: OriginBasic | OriginCity | OriginDistrict) => {
    if (originSelected !== undefined) {
      if ('regency_id' in originSelected) {
        setSelectedDistrict(originSelected);
        return;
      }
      if ('province_id' in originSelected) {
        setSelectedRegency(originSelected);
        return;
      }
      setSelectedProvince(originSelected);
    }
  };

  const handleSubmit = () => {
    originContext.setOrigin({
      province: selectedProvince,
      city: selectedRegency,
      district: selectedDistrict,
    });

    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <SelectedOrigin province={selectedProvince} city={selectedRegency} district={selectedDistrict} />

        {selectedProvince === null ? <OriginList onSelect={handleSelectOrigin} origin={provinces} title="Provinsi" /> : null}
        {selectedProvince !== null ? (
          <>
            {selectedRegency === null ? <OriginList onSelect={handleSelectOrigin} origin={regencies} title="Kota" /> : null}
            {selectedRegency !== null && selectedDistrict === null ? <OriginList onSelect={handleSelectOrigin} origin={districts} title="Kecamatan" /> : null}
          </>
        ) : null}
      </View>
      {hasFilledAll ? (
        <View style={styles.btnContainer}>
          <Button onPress={handleSubmit} text="Simpan" />
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
  },
  btnContainer: {
    paddingHorizontal: 16,
  },
});
