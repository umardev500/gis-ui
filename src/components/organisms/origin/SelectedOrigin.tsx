import {ChevronRightIcon} from '@components/atoms';
import {colors} from '@constants/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {OriginProp} from 'src/types';

interface Props {
  origin: OriginProp;
  setOrigin: React.Dispatch<React.SetStateAction<OriginProp>>;
}

export const SelectedOrigin: React.FC<Props> = ({origin}) => {
  const {province, city, district} = origin;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.itemContainer,
          {
            marginTop: 18,
          },
        ]}>
        {/* label */}
        <View>
          <Text style={styles.label}>Lokasi Terpilih</Text>
        </View>
        {/* province check */}
        {province !== null ? (
          <>
            <View
              style={[
                styles.item,
                {
                  borderBottomWidth: 0.5,
                  borderBottomColor: colors.gray[200],
                },
              ]}>
              <Text style={styles.text}>BANTEN</Text>
            </View>

            {/* City check */}
            {city !== null ? (
              <>
                <View
                  style={[
                    styles.item,
                    {
                      borderBottomWidth: 0.5,
                      borderBottomColor: colors.gray[200],
                    },
                  ]}>
                  <Text style={styles.text}>PANDEGLANG</Text>
                </View>

                {/* District check */}
                {district !== null ? (
                  <View
                    style={[
                      styles.item,
                      {
                        borderBottomWidth: 0.5,
                        borderBottomColor: colors.gray[200],
                      },
                    ]}>
                    <Text style={styles.text}>PATIA</Text>
                  </View>
                ) : (
                  <View style={styles.item}>
                    <Text style={styles.textActive}>Pilih Kecamatan</Text>
                    <ChevronRightIcon size={18} color={colors.orange[600]} />
                  </View>
                )}
                {/* end of district check */}
              </>
            ) : (
              <View style={styles.item}>
                <Text style={styles.textActive}>Pilih Kota</Text>
                <ChevronRightIcon size={18} color={colors.orange[600]} />
              </View>
            )}
            {/* end of city check */}
          </>
        ) : (
          <View style={styles.item}>
            <Text style={styles.textActive}>Pilih Provinsi</Text>
            <ChevronRightIcon size={18} color={colors.orange[600]} />
          </View>
        )}
        {/* end of province check */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  label: {
    color: colors.gray[400],
    fontSize: 12,
    marginTop: 16,
    marginBottom: 8,
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
  text: {
    color: colors.gray[600],
  },
  textActive: {
    color: colors.orange[600],
  },
});
