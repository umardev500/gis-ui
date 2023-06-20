import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapBox from '@rnmapbox/maps';

MapBox.setAccessToken(
  'sk.eyJ1IjoidW1hcmRldjUwMCIsImEiOiJjbGozdHZlZXIwcGJ3M2pvMGg4OHV0amZoIn0.Lz1MDBa4NEPu1gzFvF8pVQ',
);

export const PinPoint: React.FC = () => {
  return (
    <View style={styles.container}>
      <MapBox.MapView style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkred',
  },
  map: {
    flex: 1,
  },
});
