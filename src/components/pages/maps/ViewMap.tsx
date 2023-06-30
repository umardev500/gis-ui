import {Button} from '@components/atoms';
import {MapView} from '@components/organisms';
import {colors} from '@constants/colors';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {useLinking} from '@hooks/linking';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {RootStackParamList} from 'src/types';

type ViewMapRouteProps = RouteProp<RootStackParamList, 'ViewMapScreen'>;
type StackProps = StackNavigationProp<RootStackParamList, 'AddLocationScreen'>;

export const ViewMap: React.FC = () => {
  const [coords, setCoords] = useState([0, 0]);
  const navigation = useNavigation<StackProps>();

  const bottomSheetRef = useRef<BottomSheet>(null);

  // route
  const route = useRoute<ViewMapRouteProps>();
  const {params} = route;

  // variables
  const snapPoints = useMemo(() => ['15%', '65%', '100%'], []);
  const linkingHandler = useLinking();

  const handleLinking = () => {
    linkingHandler(`https://www.google.com/maps/dir/?api=1&origin=${coords[0]},${coords[1]}&destination=${params.location.coordinates[1]},${params.location.coordinates[0]}`);
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setCoords([position.coords.latitude, position.coords.longitude]);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  const handleUpdate = () => {
    navigation.navigate('AddLocationScreen', params);
  };

  return (
    <View style={styles.container}>
      <MapView coords={params.location.coordinates} />
      <BottomSheet
        handleStyle={{
          marginTop: 10,
        }}
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}>
        <BottomSheetScrollView>
          <View style={styles.contentContainer}>
            <View
              style={{
                flex: 1,
              }}>
              <Image resizeMode="contain" style={styles.thumb} source={{uri: params.picture}} />
              <Text style={styles.name}>{params.name} 🎉</Text>
              <Text style={styles.desc}>{params.description}</Text>
              <View style={styles.directionBtn}>
                <Button onPress={handleLinking} text="Open Direction" color={colors.gray[50]} colorText={colors.gray[600]} />
                <View style={styles.groupBtn}>
                  <View style={{flex: 1}}>
                    <Button onPress={handleUpdate} text="Update" color={colors.blue[500]} />
                  </View>
                  <Button text="Delete" />
                </View>
              </View>
            </View>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: 'row',
  },
  thumb: {
    width: '100%',
    height: 380,
    borderRadius: 8,
    marginBottom: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.gray[600],
  },
  desc: {
    marginTop: 20,
    color: colors.gray[500],
  },
  directionBtn: {
    marginTop: 24,
  },
  groupBtn: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
});
