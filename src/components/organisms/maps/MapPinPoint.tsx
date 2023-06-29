import {MAPBOX_TOKEN} from '@env';
import Mapbox, {PointAnnotation} from '@rnmapbox/maps';
import React, {useCallback, useRef, useState} from 'react';
import {Image, StyleSheet} from 'react-native';

Mapbox.setAccessToken(MAPBOX_TOKEN);

const MARKER_WIDTH = 60 * 0.4;
const MARKER_HEIGHT = 96 * 0.4;
const ZOOM_LEVEL = 12;

interface Props {
  onSelected?: (coords: any) => void;
  onUpdated?: (coords: any) => void;
}

export const MapPinPoint = React.memo(({onSelected, onUpdated}: Props) => {
  const pinPointRef = useRef<PointAnnotation>(null);
  const [hasDragged, setHasDragged] = useState(false);

  const [selectedCoords, setSelectedCoords] = useState([0, 0]);

  const handlePinPoint = useCallback((feature: any) => {
    if (onSelected !== undefined) {
      onSelected(feature.geometry.coordinates);
    }
  }, []);

  const handleUpdate = (newLocation: Mapbox.Location) => {
    if (onUpdated !== undefined) {
      onUpdated(newLocation.coords);
    }

    if (!hasDragged) {
      setSelectedCoords([newLocation.coords.longitude, newLocation.coords.latitude]);
      pinPointRef.current?.refresh();
    }
  };

  return (
    <Mapbox.MapView style={styles.map}>
      <Mapbox.UserLocation visible={false} onUpdate={handleUpdate} />
      <Mapbox.Camera followZoomLevel={ZOOM_LEVEL} followUserLocation />
      <PointAnnotation
        id={'pin'}
        coordinate={selectedCoords}
        title={'Pin point'}
        draggable
        onDragStart={() => {
          setHasDragged(true);
        }}
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
});

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
