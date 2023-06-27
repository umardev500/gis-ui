import {colors} from '@constants/colors';
import BottomSheet, {BottomSheetBackdrop, BottomSheetScrollView} from '@gorhom/bottom-sheet';
import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FilterView = React.forwardRef<BottomSheet, {}>((_, ref) => {
  const snapPoints = useMemo(() => ['1%', '100%'], []);

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
            <Text style={styles.name}>Si Jalak Harupat 🎉</Text>
            <Text style={styles.desc}>Lorem ipsum dolor is amet..</Text>
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
  desc: {
    marginTop: 20,
    color: colors.gray[500],
  },
});
