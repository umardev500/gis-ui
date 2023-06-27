import {colors} from '@constants/colors';
import {AppContext, AppContextType} from '@context/AppContext';
import BottomSheet, {BottomSheetBackdrop, BottomSheetScrollView} from '@gorhom/bottom-sheet';
import React, {useContext, useMemo} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

export const FilterView = React.forwardRef<BottomSheet, {}>((_, ref) => {
  const snapPoints = useMemo(() => ['1%', '100%'], []);
  const appContext = useContext(AppContext) as AppContextType;
  const isNear = appContext.isNear;

  return (
    <BottomSheet
      handleStyle={{
        marginTop: 10,
      }}
      ref={ref}
      index={0}
      backgroundStyle={{borderRadius: 0}}
      backdropComponent={props => <BottomSheetBackdrop {...props} />}
      snapPoints={snapPoints}>
      <BottomSheetScrollView>
        <View style={styles.contentContainer}>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.name}>Filter result 🎉</Text>
            <View style={styles.itemContainer}>
              <View style={styles.item}>
                <Text style={styles.label}>Tampilkan Lokasi Terdekat</Text>
                <Switch onChange={() => appContext.setIsNear(prev => !prev)} value={isNear} />
              </View>
            </View>
          </View>
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: 'row',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.gray[600],
  },
  label: {
    color: colors.gray[500],
  },
  itemContainer: {
    marginTop: 24,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
