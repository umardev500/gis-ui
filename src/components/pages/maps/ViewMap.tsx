import {MapView} from '@components/organisms';
import {colors} from '@constants/colors';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const ViewMap: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ['15%', '65%', '100%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={styles.container}>
      <MapView />
      <BottomSheet
        handleStyle={{
          marginTop: 10,
        }}
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <BottomSheetScrollView>
          <View style={styles.contentContainer}>
            <View
              style={{
                flex: 1,
              }}>
              <Image resizeMode="contain" style={styles.thumb} source={require('@assets/thumbs/thumb.jpg')} />
              <Text style={styles.name}>Si Jalak Harupat 🎉</Text>
              <Text style={styles.desc}>Lorem ipsum dolor is amet..</Text>
            </View>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>

      {/* <View style={styles.detailButton}>
        <Button color={'white'} colorText={colors.gray[600]} text="Lihat Detail" />
      </View> */}
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
    maxHeight: 380,
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
