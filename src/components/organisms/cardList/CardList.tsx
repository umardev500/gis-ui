import {ArrowRightIcon} from '@components/atoms';
import {CardListing} from '@components/molecules';
import {colors} from '@constants/colors';
import {API_URL} from '@env';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Item} from 'src/types';

const data: Item[] = [
  {
    url: `${API_URL}/thumbs/thumb.jpg`,
  },
  {
    url: `${API_URL}/thumbs/thumb-3.jpg`,
  },
  {
    url: `${API_URL}/thumbs/thumb-4.jpg`,
  },
  {
    url: `${API_URL}/thumbs/thumb-5.jpg`,
  },
  {
    url: `${API_URL}/thumbs/thumb-1.jpg`,
  },
];

export const CardList: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>Update Terbaru</Text>
        <ArrowRightIcon />
      </View>
      <View style={styles.list}>
        {data.map((item, i) => (
          <CardListing {...item} key={i} index={i} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'teal',
    justifyContent: 'space-between',
  },
});
