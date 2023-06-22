import district from '@assets/geo/districts.json';
import province from '@assets/geo/provinces.json';
import city from '@assets/geo/regencies.json';
import {OriginList, SelectedOrigin} from '@components/organisms';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {OriginBasic, OriginCity, OriginDistrict} from 'src/types';

export const Origin: React.FC = () => {
  const [provinces] = useState<OriginBasic[]>(province);
  const [regencies, setRegencies] = useState<OriginCity[]>([]);
  const [districts, setDistricts] = useState<OriginDistrict[]>([]);

  const [selectedProvince, setSelectedProvince] = useState<OriginBasic | null>(null);
  const [selectedRegency, setSelectedRegency] = useState<OriginCity | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<OriginDistrict | null>(null);

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
  },
});
