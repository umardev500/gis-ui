import {colors} from '@constants/colors';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {OriginBasic, OriginCity, OriginDistrict} from 'src/types';

interface Props {
  title: string;
  origin: OriginBasic[] | OriginCity[] | OriginDistrict[];
  onSelect?: (origin?: OriginBasic | OriginCity | OriginDistrict) => void;
}

export const OriginList: React.FC<Props> = ({origin, title, onSelect}) => {
  const data = [...Array(6)];
  const dataLength = data.length - 1;

  const handleSelect = (originSelected: OriginBasic | OriginCity | OriginDistrict) => {
    if (onSelect !== undefined) {
      onSelect(originSelected);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>

      <View style={styles.itemContainer}>
        {origin.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => {
              handleSelect(item);
            }}>
            <View style={[styles.item, i !== dataLength ? styles.itemWithBorder : {}]}>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
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
