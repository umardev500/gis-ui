import {CardListing} from '@components/molecules';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomerProp} from 'src/types';

interface Props {
  customers?: CustomerProp[];
}

export const CardList: React.FC<Props> = ({customers}) => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {customers?.map((item, i) => (
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
