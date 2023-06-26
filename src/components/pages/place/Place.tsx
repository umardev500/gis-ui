import {Loading} from '@components/atoms';
import {CardList} from '@components/organisms';
import {colors} from '@constants/colors';
import {useGetCustomers} from '@hooks/api';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export const Place: React.FC = () => {
  const {customersResponse, loading} = useGetCustomers();

  return (
    <ScrollView style={styles.scrollView}>
      {loading ? <Loading animating /> : null}
      <View style={styles.container}>
        <Text style={styles.title}>Lokasi Customer</Text>
        <CardList customers={customersResponse?.data} />
      </View>
    </ScrollView>
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
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[600],
    paddingHorizontal: 24,
    marginBottom: 24,
    marginTop: 24,
  },
});
