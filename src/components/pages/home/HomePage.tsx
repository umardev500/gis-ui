import {ArrowRightIcon} from '@components/atoms';
import {HeroHeading} from '@components/molecules';
import {CardList, Hero} from '@components/organisms';
import {colors} from '@constants/colors';
import {API_URL} from '@env';
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <HeroHeading scrollXAnimated={scrollXAnimated} data={data} />
        <Hero scrollXAnimated={scrollXAnimated} data={data} />
        <View style={styles.heading}>
          <Text style={styles.title}>Update Terbaru</Text>
          <ArrowRightIcon />
        </View>
        <CardList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
