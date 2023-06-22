import {OriginList, SelectedOrigin} from '@components/organisms';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {OriginProp} from 'src/types';

export const Origin: React.FC = () => {
  const [origin, setOrigin] = useState<OriginProp>({
    province: null,
    city: null,
    district: null,
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <SelectedOrigin origin={origin} setOrigin={setOrigin} />

        {origin.province === null ? <OriginList title="Provinsi" /> : null}
        {origin.province !== null ? (
          <>
            {origin.city === null ? <OriginList title="Kota" /> : null}
            {origin.city !== null && origin.district === null ? (
              <OriginList title="Kecamatan" />
            ) : null}
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
