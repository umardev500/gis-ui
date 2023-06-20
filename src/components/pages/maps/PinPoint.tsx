import PinIcon from '@assets/icons/red_marker.png';
import {MAPBOX_TOKEN} from '@env';
import Mapbox, {Location, PointAnnotation} from '@rnmapbox/maps';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

Mapbox.setAccessToken(MAPBOX_TOKEN);

const MARKER_WIDTH = 60 * 0.4;
const MARKER_HEIGHT = 96 * 0.4;
const ZOOM_LEVEL = 12;

export const PinPoint: React.FC = () => {
  const pointAnnotation = useRef<PointAnnotation>(null);

  const handlePinPoint = useCallback((feature: any) => {
    console.log('onDragEnd:', feature.id, feature.geometry.coordinates);
  }, []);

  const [location, setLocation] = useState<Location>();

  useEffect(() => {
    if (location !== undefined) {
      pointAnnotation.current?.refresh();
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map}>
        <Mapbox.UserLocation
          visible={false}
          onUpdate={newLocation => setLocation(newLocation)}
        />
        <Mapbox.Camera followZoomLevel={ZOOM_LEVEL} followUserLocation />
        <PointAnnotation
          id={'pin'}
          coordinate={[
            location?.coords.longitude ?? 0,
            location?.coords.latitude ?? 0,
          ]}
          title={'Pin point'}
          draggable
          onDragEnd={handlePinPoint}
          ref={pointAnnotation}>
          <Image
            source={PinIcon}
            style={{width: MARKER_WIDTH, height: MARKER_HEIGHT}}
            // Prevent rendering bitmap at unknown animation state
            fadeDuration={0}
          />
        </PointAnnotation>
      </Mapbox.MapView>
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
