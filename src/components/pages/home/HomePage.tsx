import {ArrowRightIcon, Message} from '@components/atoms';
import {HeroHeading} from '@components/molecules';
import {CardList, Hero} from '@components/organisms';
import {colors} from '@constants/colors';
import {API_URL} from '@env';
import {useGetCustomers} from '@hooks/api';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {Item} from 'src/types';

const data: Item[] = [
  {
    title: 'Gelora Bung Karno',
    url: `${API_URL}/thumbs/thumb.jpg`,
    createdTime: 16082898723,
  },
  {
    title: 'Gelora Bung Karno',
    url: `${API_URL}/thumbs/thumb-3.jpg`,
    createdTime: 16082898723,
  },
  {
    title: 'Gelora Bung Karno',
    url: `${API_URL}/thumbs/thumb-4.jpg`,
    createdTime: 16082898723,
  },
  {
    title: 'Gelora Bung Karno',
    url: `${API_URL}/thumbs/thumb-5.jpg`,
    createdTime: 16082898723,
  },
  {
    title: 'Gelora Bung Karno',
    url: `${API_URL}/thumbs/thumb-1.jpg`,
    createdTime: 16082898723,
  },
  {
    title: 'Gelora Bung Karno',
    url: `${API_URL}/thumbs/thumb-2.jpg`,
    createdTime: 16082898723,
  },
];

export const HomePage: React.FC = () => {
  const scrollXAnimated = useSharedValue(1);
  const {customersResponse} = useGetCustomers();
  const hasCustomerData = (customersResponse?.meta.total ?? 0) > 0;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <HeroHeading scrollXAnimated={scrollXAnimated} data={data} />
        <Hero scrollXAnimated={scrollXAnimated} data={data} />
        <View style={styles.heading}>
          <Text style={styles.title}>Update Terbaru</Text>
          <ArrowRightIcon />
        </View>
        <CardList customers={customersResponse?.data} />
        {!hasCustomerData ? (
          <View style={styles.messageContainer}>
            <Message text="No data found." />
          </View>
        ) : null}
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
    paddingBottom: 16,
  },
  messageContainer: {
    paddingHorizontal: 24,
  },
  heading: {
    paddingHorizontal: 24,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[600],
  },
});
