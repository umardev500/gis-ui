import {colors} from '@constants/colors';
import {toUpperEachWord} from '@helpers';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {CustomerProp} from 'src/types';

const {width} = Dimensions.get('window');
const SPACING = 24;
const GAP = 16;
const ITEM_WIDTH = width / 2 - SPACING - GAP / 2;
const ITEM_HEIGHT = 250;

interface Props extends CustomerProp {
  index: number;
}

export const CardListing: React.FC<Props> = ({index, name, province, city, thumbnail}) => {
  const even = index % 2 !== 0;

  return (
    <View
      style={[
        styles.item,
        {
          marginRight: even ? SPACING : 0,
          marginLeft: !even ? SPACING : 0,
        },
      ]}>
      <Image style={styles.thumb} source={{uri: thumbnail}} />
      <View style={styles.desc}>
        <Text numberOfLines={1} style={styles.title}>
          {name}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {toUpperEachWord(city.name)}, {toUpperEachWord(province.name)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: ITEM_WIDTH,
    maxHeight: ITEM_HEIGHT,
    marginBottom: SPACING,
    backgroundColor: 'white',
    borderRadius: 14,
    overflow: 'hidden',
    elevation: 4,
  },
  thumb: {
    height: 158,
  },
  desc: {
    marginTop: 0,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 14,
    color: colors.gray[600],
    fontWeight: '500',
  },
  location: {
    fontSize: 14,
    color: colors.gray[400],
  },
});
