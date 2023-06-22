import {CardListing} from '@components/molecules';
import {API_URL} from '@env';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Item} from 'src/types';

const data: Item[] = [
  {
    title: '',
    url: `${API_URL}/thumbs/thumb.jpg`,
    createdTime: 1629089389,
  },
  {
    title: '',
    url: `${API_URL}/thumbs/thumb-3.jpg`,
    createdTime: 1629089389,
  },
  {
    title: '',
    url: `${API_URL}/thumbs/thumb-4.jpg`,
    createdTime: 1629089389,
  },
  {
    title: '',
    url: `${API_URL}/thumbs/thumb-5.jpg`,
    createdTime: 1629089389,
  },
  {
    title: '',
    url: `${API_URL}/thumbs/thumb-1.jpg`,
    createdTime: 1629089389,
  },
];

export const CardList: React.FC = () => {
  return (
    <View style={styles.container}>
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

  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'teal',
    justifyContent: 'space-between',
  },
});
