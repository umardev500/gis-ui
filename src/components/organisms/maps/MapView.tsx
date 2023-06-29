import {MAPBOX_TOKEN} from '@env';
import Mapbox, {Callout, MarkerView} from '@rnmapbox/maps';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

Mapbox.setAccessToken(MAPBOX_TOKEN);

const MARKER_WIDTH = 60 * 0.4;
const MARKER_HEIGHT = 96 * 0.4;
const ZOOM_LEVEL = 12;

interface Props {
  coords: number[];
}

export const MapView = React.memo(({coords}: Props) => {
  return (
    <Mapbox.MapView style={styles.map}>
      <Mapbox.Camera zoomLevel={ZOOM_LEVEL} centerCoordinate={coords} />

      <MarkerView coordinate={coords}>
        <View>
          <Callout title="The location" />
          <Image
            source={require('@assets/icons/red_marker.png')}
            style={{width: MARKER_WIDTH, height: MARKER_HEIGHT}}
            // Prevent rendering bitmap at unknown animation state
            fadeDuration={0}
          />
        </View>
      </MarkerView>
    </Mapbox.MapView>
  );
});

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
