import {Loading} from '@components/atoms';
import {CardList} from '@components/organisms';
import {FilterView} from '@components/organisms/filterView/FilterView';
import {colors} from '@constants/colors';
import {AppContext, AppContextType} from '@context/AppContext';
import BottomSheet from '@gorhom/bottom-sheet';
import {useGetCustomers} from '@hooks/api';
import React, {useContext, useRef} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Place: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const appContext = useContext(AppContext) as AppContextType;
  const isNear = appContext.isNear;
  const {customersResponse, loading} = useGetCustomers(isNear);

  const handleFilterClick = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

  return (
    <>
      {loading ? <Loading animating /> : null}
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.title}>Lokasi Customer</Text>
            <TouchableOpacity onPress={handleFilterClick}>
              <Text style={styles.filter}>Filter</Text>
            </TouchableOpacity>
          </View>
          <CardList customers={customersResponse?.data} />
        </View>
      </ScrollView>
      <FilterView ref={bottomSheetRef} />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[600],
    paddingHorizontal: 24,
    marginBottom: 24,
    marginTop: 24,
  },
  filter: {
    paddingRight: 24,
    color: colors.gray[400],
  },
});
