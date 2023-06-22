import {OriginList, SelectedOrigin} from '@components/organisms';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {OriginProp} from 'src/types';

export const Origin: React.FC = () => {
  const [origin, setOrigin] = useState<OriginProp>({
    province: 'banten',
    city: 'pandeglang',
    district: null,
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <SelectedOrigin origin={origin} setOrigin={setOrigin} />
        <OriginList />
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
