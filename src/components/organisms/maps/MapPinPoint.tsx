import {MAPBOX_TOKEN} from '@env';
import Mapbox, {Location, PointAnnotation} from '@rnmapbox/maps';
import React, {useCallback, useRef, useState} from 'react';
import {Image, StyleSheet} from 'react-native';

Mapbox.setAccessToken(MAPBOX_TOKEN);

const MARKER_WIDTH = 60 * 0.4;
const MARKER_HEIGHT = 96 * 0.4;
const ZOOM_LEVEL = 12;

export const MapPinPoint: React.FC = () => {
  const pinPointRef = useRef<PointAnnotation>(null);
  const [location, setLocation] = useState<Location>();
  const handlePinPoint = useCallback((feature: any) => {
    console.log('onDragEnd:', feature.id, feature.geometry.coordinates);
  }, []);

  return (
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
        ref={pinPointRef}>
        <Image
          source={require('@assets/icons/red_marker.png')}
          style={{width: MARKER_WIDTH, height: MARKER_HEIGHT}}
          onLoad={() => pinPointRef.current?.refresh()}
          // Prevent rendering bitmap at unknown animation state
          fadeDuration={0}
        />
      </PointAnnotation>
    </Mapbox.MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
