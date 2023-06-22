import {colors} from '@constants/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  title: string;
}

export const OriginList: React.FC<Props> = ({title}) => {
  const data = [...Array(6)];
  const dataLength = data.length - 1;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>

      <View style={styles.itemContainer}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[
              styles.item,
              i !== dataLength ? styles.itemWithBorder : {},
            ]}>
            <Text>PATIA</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  label: {
    marginVertical: 8,
    fontSize: 12,
  },
  itemContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  item: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    justifyContent: 'space-between',
  },
  itemWithBorder: {
    borderBottomColor: colors.gray[200],
    borderBottomWidth: 0.5,
  },
  text: {
    color: colors.gray[600],
  },
});
