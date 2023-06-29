import {MapView} from '@components/organisms';
import {colors} from '@constants/colors';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useMemo, useRef} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from 'src/types';

type ViewMapRouteProps = RouteProp<RootStackParamList, 'ViewMapScreen'>;

export const ViewMap: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // route
  const route = useRoute<ViewMapRouteProps>();
  const {params} = route;

  // variables
  const snapPoints = useMemo(() => ['15%', '65%', '100%'], []);

  return (
    <View style={styles.container}>
      <MapView />
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
});
